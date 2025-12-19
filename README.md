# Ask Chinook: An OpenAI SQL Translator Web App

A modern, full-stack **Natural Language to SQL Query Translator** powered by OpenAI and LangChain. Transform plain English questions into SQL queries and interact with databases effortlessly—no SQL knowledge required.

![Architecture](https://img.shields.io/badge/Architecture-Full--Stack-orange) ![Stack](https://img.shields.io/badge/Stack-React%20TypeScript%20%7C%20Node.js%20%7C%20Express-blue) ![AI](https://img.shields.io/badge/AI-OpenAI%20%7C%20LangChain-green) ![Database](https://img.shields.io/badge/Database-SQLite-lightgrey)

---

## ✨ Features

### 🤖 AI-Powered Translation
- Convert natural language queries into accurate SQL statements
- Powered by OpenAI's GPT models via LangChain
- Intelligent context understanding for complex queries
- Automatic query optimization
- **LangSmith monitoring** for AI performance tracking and debugging

### 🗄️ Database Interaction
- Executes SQL queries on Chinook sample database
- Real-time query results with formatted output
- Support for SELECT queries with joins, filters, and aggregations
- Safe query execution with built-in validation

### 🎨 User-Friendly Interface
- Clean, intuitive React-based UI
- Instant feedback on query translation
- Formatted results display in tables
- Example queries to get started quickly
- Error handling with helpful messages

---

## 🏗️ Architecture

```
┌──────────────────┐
│   React Client   │  User Interface (TypeScript)
└────────┬─────────┘
         │ HTTP Requests
         ↓
┌────────────────────┐
│   Express Server   │  API Layer
└────┬──────────┬────┘
     │          │
     ↓          ↓
┌─────────┐ ┌──────────────┐
│ OpenAI  │ │   SQLite     │
│   API   │ │  (Chinook)   │
└────┬────┘ └──────────────┘
     │
     ↓
┌─────────────┐
│  LangSmith  │  AI Monitoring & Observability
└─────────────┘
```

**Design Principles:**
- **Separation of concerns** – Client handles UI, server manages AI and database logic
- **API-first approach** – RESTful endpoints for scalability
- **AI integration** – LangChain orchestrates OpenAI for reliable SQL generation
- **Observability** – LangSmith provides real-time monitoring, tracing, and debugging
- **Sample database** – Chinook DB provides realistic music store data
- **Error resilience** – Comprehensive validation and error handling

---

## 🛠️ Tech Stack

### Frontend
- **React with TypeScript** – Type-safe component development
- **TypeScript** – Static typing for enhanced code quality
- **CSS3** – Responsive styling
- **Fetch API** – HTTP client for server communication

### Backend
- **Node.js** – JavaScript runtime environment
- **Express** – Lightweight web framework
- **LangChain** – AI orchestration framework
- **LangSmith** – AI observability and monitoring platform
- **OpenAI API** – GPT models for natural language processing

### Database
- **SQLite** – Lightweight, serverless database
- **Chinook Database** – Sample dataset with realistic music store data
  - Artists, Albums, Tracks, Customers, Invoices, and more

### Infrastructure
- **npm** – Package management
- **dotenv** – Environment variable management

---

## 📂 Project Structure

```
.
├── client/                # React TypeScript frontend
│   ├── src/
│   │   ├── App.tsx       # Main application component
│   │   ├── components/   # Reusable UI components
│   │   └── styles/       # CSS stylesheets
│   ├── tsconfig.json     # TypeScript configuration
│   └── package.json
│
├── server/               # Node.js backend
│   ├── index.js          # Express server entry point
│   ├── routes/           # API route handlers
│   ├── controllers/      # Business logic
│   ├── database/         # SQLite connection & Chinook DB
│   └── package.json
│
└── README.md
```

---

## 🔒 Security Implementation

### API Security
- **Environment variables** for sensitive credentials (OpenAI API key)
- No API keys exposed to client-side code
- Server-side validation of all queries

### Database Protection
- **Read-only queries** – Only SELECT statements allowed
- SQL injection prevention through parameterized queries
- Query validation before execution
- Error messages sanitized to prevent information disclosure

### Best Practices
- Secrets stored in `.env` file (not committed to version control)
- CORS configured for trusted origins
- Rate limiting ready for production deployment

---

## 💡 Key Learnings

### AI Integration
- Integrated OpenAI's GPT models using LangChain framework
- Designed effective prompts for accurate SQL generation
- Implemented context-aware query translation
- Handled AI response parsing and validation
- **Set up LangSmith for monitoring AI chain execution and performance**
- **Tracked token usage, latency, and error rates in real-time**
- **Debugged AI responses with detailed trace logs**

### Full-Stack Development
- Built RESTful API with Express for AI-powered features
- Developed type-safe React components with TypeScript
- Managed asynchronous operations with async/await
- Created responsive UI components for real-time feedback
- Implemented error boundaries and fallback UI
- Leveraged TypeScript for compile-time error detection

### Database Management
- Worked with SQLite for lightweight data storage
- Explored Chinook sample database schema
- Executed dynamic SQL queries safely
- Formatted query results for optimal display

### Best Practices
- Environment-based configuration for different deployment stages
- Comprehensive error handling at every layer
- Clean code organization and separation of concerns
- Documentation for maintainability

---

## 🚀 Getting Started

### Prerequisites

```bash
# Node.js version 14 or higher
node --version

# npm or yarn package manager
npm --version

# OpenAI API key (get one at https://platform.openai.com/)
# LangSmith API key (optional, for monitoring - get one at https://smith.langchain.com/)
```

### Setup Instructions

**1. Clone the Repository**

```bash
git clone https://github.com/KartikJondhalekar/Ask-Chinook.git
cd OpenAI-SQL-Translator
```

**2. Install Server Dependencies**

```bash
cd server
npm install
```

**3. Install Client Dependencies**

```bash
cd ../client
npm install
```

**4. Configure Environment Variables**

Create a `.env` file in the `server` directory:

```bash
# server/.env
OPENAI_API_KEY=your_openai_api_key_here
PORT=5000

# Optional: LangSmith monitoring (recommended for production)
LANGCHAIN_TRACING_V2=true
LANGCHAIN_API_KEY=your_langsmith_api_key_here
LANGCHAIN_PROJECT=sql-translator
```

**5. Start the Backend Server**

```bash
cd server
npm start
```

The server will run on `http://localhost:5000`

**6. Start the Frontend Client**

```bash
cd client
npm start
```

The client will open automatically at `http://localhost:3000`

---

## 📖 Usage

### Example Queries

Try these natural language queries to explore the Chinook database:

```
"Show me all albums by AC/DC"
"List the top 5 customers by total purchases"
"What are the most popular music genres?"
"Find all tracks longer than 5 minutes"
"Show me invoices from 2023"
"Which artist has the most albums?"
```

### How It Works

1. **Enter Query** – Type your question in plain English
2. **AI Translation** – OpenAI converts it to SQL via LangChain
3. **Execution** – Server runs the query on Chinook database
4. **Display Results** – Formatted table shows your data

### Response Format

```json
{
  "naturalLanguage": "Show me all albums by AC/DC",
  "sqlQuery": "SELECT * FROM albums WHERE ArtistId = (SELECT ArtistId FROM artists WHERE Name = 'AC/DC')",
  "results": [
    { "AlbumId": 1, "Title": "For Those About To Rock", "ArtistId": 1 },
    { "AlbumId": 4, "Title": "Let There Be Rock", "ArtistId": 1 }
  ]
}
```

---

## 📊 LangSmith Monitoring

This project integrates **LangSmith** for comprehensive AI observability:

### What LangSmith Provides
- **Real-time Tracing** – Track every step of LangChain execution
- **Performance Metrics** – Monitor latency, token usage, and costs
- **Error Debugging** – Detailed logs when queries fail
- **Query Analytics** – Analyze which natural language patterns work best
- **Prompt Optimization** – Test and compare different prompts

### Viewing Your Traces
1. Sign up at [smith.langchain.com](https://smith.langchain.com/)
2. Create a new project (e.g., "sql-translator")
3. Add your API key to `.env` file
4. Run queries and view traces in the LangSmith dashboard

### Example Trace Information
- Input: Natural language query
- LLM calls: Prompt sent to OpenAI
- Output: Generated SQL query
- Execution time: End-to-end latency
- Token count: Cost calculation

---

## 🗄️ Database Schema

The Chinook database contains the following tables:

- **artists** – Music artists and bands
- **albums** – Album information linked to artists
- **tracks** – Individual songs with duration, genre, etc.
- **genres** – Music genre classifications
- **customers** – Customer information
- **invoices** – Purchase records
- **invoice_items** – Line items for each invoice
- **employees** – Employee data
- **playlists** – User-created playlists

---

## 🎯 Project Highlights

- **AI-Powered** – Leverages cutting-edge GPT models for natural language understanding
- **Zero SQL Required** – Makes databases accessible to non-technical users
- **Type-Safe Development** – TypeScript ensures code reliability and maintainability
- **Production-Ready Monitoring** – LangSmith tracks AI performance in real-time
- **Production-Ready Architecture** – Clean separation of frontend and backend
- **Secure by Design** – API key protection, query validation, read-only access
- **Real-World Database** – Chinook provides realistic data for testing
- **Modern Tech Stack** – React + TypeScript + Node.js + OpenAI + LangSmith ecosystem
- **Easy to Extend** – Modular code ready for additional features

---

## 🔮 Future Enhancements

- **Multiple Database Support** – Connect to MySQL, PostgreSQL, MongoDB
- **Query History** – Save and revisit previous queries
- **Data Visualization** – Charts and graphs for query results
- **Advanced Queries** – Support for INSERT, UPDATE, DELETE (with authentication)
- **User Authentication** – Personal query history and preferences
- **Query Optimization Suggestions** – AI-powered performance tips
- **Natural Language Explanations** – Explain SQL queries in plain English
- **Export Results** – Download data as CSV, JSON, or Excel
- **Multi-language Support** – Translate queries from different languages
- **Voice Input** – Speak your queries instead of typing
- **LangSmith Analytics Dashboard** – Embed monitoring insights in the UI
- **A/B Testing** – Compare different AI models and prompts

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

Please ensure your code follows the existing style and includes appropriate tests.

---

## 📄 License

This project is open source and available under the **MIT License**.

---

## 👨‍💻 Author

**Kartik Jondhalekar**

[![GitHub](https://img.shields.io/badge/GitHub-KartikJondhalekar-black?logo=github)](https://github.com/KartikJondhalekar)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://linkedin.com/in/kartik-jondhalekar)

---

## 🙏 Acknowledgments

- **OpenAI** for providing powerful language models
- **LangChain** for simplifying AI integration
- **LangSmith** for comprehensive AI observability and monitoring
- **Chinook Database** for the sample dataset

---

**⭐ If you find this project useful, please consider giving it a star!**

---

**Built with 🤖 using React TypeScript, Node.js, Express, OpenAI, LangChain & LangSmith**
