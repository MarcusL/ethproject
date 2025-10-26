import React, { useState } from 'react';
import { getBalance } from '../services/api.js';

export default function BalanceChecker() {
    const [address, setAddress] = useState('');
    const [balance, setBalance] = useState(null);

    async function handleCheckBalance() {
        const res = await getBalance(address);
        if (res.balance) setBalance(res.balance);
        else setBalance(res.error);
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Введите адрес кошелька"
                value={address}
                onChange={e => setAddress(e.target.value)}
            />
            <button onClick={handleCheckBalance}>Проверить баланс</button>
            {balance && <p>Баланс: {balance}</p>}
        </div>
    );
}
