import express from 'express';
import cors from 'cors';
import generate from './api.js';

const app = express();
app.use(express.json());

app.use(cors({ origin: '*' }));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

app.post('/generate', async (req, res) => {
  try {
    const { queryDescription } = req.body;
    const result = await generate(queryDescription);
    const sqlQuery = result.content || result;
    console.log(sqlQuery);
    res.json({ sqlQuery: sqlQuery });
  } catch (error) {
    console.log(error);
    res.json({ sqlQuery: 'Great question!, I am not able to generate a SQL query for it. Could you please provide more details or clarify your question?' });
  }
});
