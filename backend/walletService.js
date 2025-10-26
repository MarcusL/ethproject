import { ethers } from 'ethers';
import { Wallet } from 'zksync-ethers';
import dotenv from 'dotenv';
dotenv.config();

const RPC_URL = `https://rpc.ankr.com/zksync_era_testnet?apikey=${process.env.ANKR_API_KEY}`;

// Создать новый кошелек
export async function createWallet() {
    const wallet = Wallet.createRandom();
    return {
        address: wallet.address,
        privateKey: wallet.privateKey
    };
}

// Получить баланс
export async function getBalance(address) {
    const provider = new ethers.JsonRpcProvider(RPC_URL);
    const balance = await provider.getBalance(address);
    return ethers.formatEther(balance);
}
