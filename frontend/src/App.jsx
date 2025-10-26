import React, { useState } from "react";
import axios from "axios";

const BACKEND_URL = "http://localhost:3001";

function App() {
  const [wallet, setWallet] = useState(null);
  const [balance, setBalance] = useState(null);
  const [addressInput, setAddressInput] = useState("");

  // Генерация нового кошелька
  const handleCreateWallet = async () => {
    try {
      const res = await axios.post(`${BACKEND_URL}/wallet`);
      setWallet(res.data);
      setBalance(null); // сброс баланса при новом кошельке
      setAddressInput(res.data.address);
    } catch (err) {
      console.error("Error creating wallet:", err);
      alert("Ошибка при создании кошелька");
    }
  };

  // Получение баланса по адресу
  const handleGetBalance = async () => {
    try {
      if (!addressInput) return alert("Введите адрес кошелька");
      const res = await axios.get(`${BACKEND_URL}/balance/${addressInput}`);
      setBalance(res.data.balance);
    } catch (err) {
      console.error("Error fetching balance:", err);
      alert("Ошибка при получении баланса");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">zkSync Wallet Manager</h1>

      <button
        onClick={handleCreateWallet}
        className="bg-blue-500 text-white px-6 py-2 rounded mb-4 hover:bg-blue-600 transition"
      >
        Создать кошелек
      </button>

      {wallet && (
        <div className="bg-white shadow-md p-4 rounded mb-4 w-full max-w-md">
          <p><strong>Address:</strong> {wallet.address}</p>
          <p><strong>Private Key:</strong> {wallet.privateKey}</p>
        </div>
      )}

      <div className="flex flex-col items-center mb-4 w-full max-w-md">
        <input
          type="text"
          placeholder="Введите адрес кошелька"
          value={addressInput}
          onChange={(e) => setAddressInput(e.target.value)}
          className="border p-2 rounded w-full mb-2"
        />
        <button
          onClick={handleGetBalance}
          className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition"
        >
          Проверить баланс
        </button>
      </div>

      {balance !== null && (
        <p className="text-xl font-semibold">
          Баланс: {balance} ETH
        </p>
      )}
    </div>
  );
}

export default App;
