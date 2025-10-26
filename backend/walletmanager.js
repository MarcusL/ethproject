import { ethers, zksync } from "zksync-ethers";
import provider from "./zkProvider.js";

const wallets = {}; // В памяти для MVP, потом можно заменить на БД

function createWallet() {
    const wallet = zksync.Wallet.createRandom();
    wallets[wallet.address] = wallet.privateKey;
    return {
        address: wallet.address,
        privateKey: wallet.privateKey
    };
}

async function getBalance(address) {
    const wallet = new zksync.Wallet(wallets[address], provider);
    const balanceBig = await wallet.getBalance("ETH");
    return ethers.formatEther(balanceBig);
}

export default { createWallet, getBalance };
