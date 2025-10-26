import { ethers } from 'ethers';
import { provider } from './zkProvider.js';

// Пример функции для вызова смарт-контракта (заготовка)
export async function callContractExample(contractAddress, abi, methodName, args) {
  const ethProvider = new ethers.JsonRpcProvider(provider.rpc.url);
  const contract = new ethers.Contract(contractAddress, abi, ethProvider);
  return await contract[methodName](...args);
}
