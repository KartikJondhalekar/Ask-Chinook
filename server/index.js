import express from 'express';
import cors from 'cors';

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
  const { queryDescription } = req.body;
  console.log(queryDescription);
  res.json({ answer: `Generated response for query: ${queryDescription}` });
});
