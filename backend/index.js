import express from 'express';
import cors from 'cors';
import { createWallet, getBalance } from './walletmanager.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Генерация нового кошелька
app.post('/wallet', (req, res) => {
  try {
    const wallet = createWallet();
    res.json(wallet);
  } catch (err) {
    console.error("Error creating wallet:", err);
    res.status(500).json({ error: err.message });
  }
});

// Получение баланса по адресу
app.get('/balance/:address', async (req, res) => {
  try {
    const balance = await getBalance(req.params.address);
    res.json({ balance });
  } catch (err) {
    console.error("Error fetching balance:", err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
