import express from 'express';
import cors from 'cors';
import { createWallet, getBalance } from './walletService.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/create-wallet', async (req, res) => {
    const wallet = await createWallet();
    res.json(wallet);
});

app.get('/balance/:address', async (req, res) => {
    try {
        const balance = await getBalance(req.params.address);
        res.json({ balance });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
