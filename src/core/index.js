import {Connection, clusterApiUrl, PublicKey} from '@solana/web3.js';

export async function getBalanceUsingWeb3(address){
    const publicKey = new PublicKey(address);
    const connection = new Connection(clusterApiUrl("devnet"));
    return connection.getBalance(publicKey);
}
