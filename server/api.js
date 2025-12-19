import dotenv from 'dotenv';
import { DataSource } from "typeorm";
import { SqlDatabase } from "langchain/sql_db";
import { ChatOpenAI } from "@langchain/openai";
import {
    RunnablePassthrough,
    RunnableSequence,
} from "@langchain/core/runnables";
import { PromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";

dotenv.config();

const openaiApiKey = process.env.OPENAI_API_KEY;
if (!openaiApiKey) {
    throw new Error('OPENAI_API_KEY environment variable is not set');
}

const dataSource = new DataSource({
    type: 'sqlite',
    database: 'chinook.db'
});

const db = await SqlDatabase.fromDataSourceParams({
    appDataSource: dataSource,
});

const prompt = new PromptTemplate({
    template: `Based on the table schema below, generate a SQL query to answer the user's question. Return just the SQL and nothing else:\n\n{schema}\n\nQuestion: {question}\n\nSQL Query:`,
    inputVariables: ['schema', 'question'],
});

const model = new ChatOpenAI();

const sqlQueryGeneratorChain = RunnableSequence.from([
    RunnablePassthrough.assign({
        schema: async () => await db.getTableInfo(),
    }),
    prompt,
    model.withConfig({ stop: ['\nSQLResult:'] }),
    new StringOutputParser(),
]);

export const generateSql = async (question) => {
    return sqlQueryGeneratorChain.invoke({ question });
};

const generate = async (queryDescription) => {
    const finalResponsePrompt = PromptTemplate.fromTemplate(
        `Based on the table schema below, question, sql query, and sql response, write a natural language response:
         {schema}

         Question: {question}
         SQL Query: {query}
         SQL Response: {response}`);

    const fullChain = RunnableSequence.from([
        RunnablePassthrough.assign({
            query: sqlQueryGeneratorChain,
        }),
        {
            schema: async () => await db.getTableInfo(),
            question: (input) => input.question,
            query: (input) => input.query,
            response: (input) => db.run(input.query),
        },
        finalResponsePrompt,
        model
    ]);

    const finalResponse = await fullChain.invoke({
        question: `${queryDescription}`,
    });

    return finalResponse;
};

export default generate;