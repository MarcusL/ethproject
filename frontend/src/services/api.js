const API_URL = 'http://localhost:3001';

export async function createWallet() {
    const res = await fetch(`${API_URL}/create-wallet`, { method: 'POST' });
    return res.json();
}

export async function getBalance(address) {
    const res = await fetch(`${API_URL}/balance/${address}`);
    return res.json();
}
