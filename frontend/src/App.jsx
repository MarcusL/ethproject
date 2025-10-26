import React from 'react';
import WalletButton from './components/WalletButton.jsx';
import BalanceChecker from './components/BalanceChecker.jsx';

export default function App() {
    return (
        <div>
            <h1>NGU ZKsync Testnet DApp</h1>
            <WalletButton />
            <hr />
            <BalanceChecker />
        </div>
    );
}
