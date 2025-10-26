import provider from "./zkProvider.js";
import { ethers, zksync } from "zksync-ethers";

export async function deposit(req, res) {
    try {
        const { fromPrivateKey, amount } = req.body;
        const wallet = new zksync.Wallet(fromPrivateKey, provider);
        const tx = await wallet.sendTransaction({
            to: "адрес_эскроу_контракта",
            value: ethers.parseEther(amount)
        });
        await tx.wait();
        res.json({ success: true, txHash: tx.hash });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export async function confirm(req, res) {
    // Здесь будет логика подтверждения сделки
    res.json({ success: true });
}

export default { deposit, confirm };
