import React, { useState } from 'react';
import { createWallet } from '../services/api.js';

export default function WalletButton() {
    const [wallet, setWallet] = useState(null);

    async function handleCreateWallet() {
        const w = await createWallet();
        setWallet(w);
    }

    return (
        <div>
            <button onClick={handleCreateWallet}>Создать кошелек</button>
            {wallet && (
                <div>
                    <p>Адрес: {wallet.address}</p>
                    <p>Приватный ключ: {wallet.privateKey}</p>
                </div>
            )}
        </div>
    );
}
