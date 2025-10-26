import pkg from 'zksync-ethers';
import 'dotenv/config';
import { ethers } from 'ethers';
import { RPC_URL } from './zkProvider.js';  // импортируем строку URL напрямую


const { Wallet } = pkg;

// Создание нового кошелька
export function createWallet() {
  const wallet = Wallet.createRandom();
  return {
    address: wallet.address,
    privateKey: wallet.privateKey
  };
}

// Проверка баланса
export async function getBalance(address) {
  try {
    const ethProvider = new ethers.JsonRpcProvider(RPC_URL);
    const balanceWei = await ethProvider.getBalance(address);
    return ethers.formatEther(balanceWei);
  } catch (err) {
    console.error("Error fetching balance:", err);
    throw err;
  }
}
