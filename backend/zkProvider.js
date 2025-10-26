import { ethers, zksync } from "zksync-ethers";
import dotenv from "dotenv";

dotenv.config();

const provider = new zksync.Provider(`https://rpc.ankr.com/zksync_era_testnet?apikey=${process.env.ANCHOR_API_KEY}`);

export default provider;
