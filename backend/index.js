import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import walletManager from "./walletmanager.js";
import contractServices from "./contractServices.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Роут для создания кошелька
app.post("/wallet/create", (req, res) => {
    const wallet = walletManager.createWallet();
    res.json(wallet);
});

// Роут для проверки баланса
app.get("/wallet/balance/:address", async (req, res) => {
    try {
        const balance = await walletManager.getBalance(req.params.address);
        res.json({ balance });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Роуты для эскроу (депозит, подтверждение)
app.post("/escrow/deposit", contractServices.deposit);
app.post("/escrow/confirm", contractServices.confirm);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
