import {
    Connection, 
    clusterApiUrl, 
    PublicKey, 
    Keypair, 
    Transaction, 
    sendAndConfirmTransaction,
    LAMPORTS_PER_SOL,
    SystemProgram,
} from '@solana/web3.js';

export const PRIVATE_KEY=[62,90,124,221,216,230,99,163,181,34,131,9,130,3,142,36,32,191,128,27,38,45,40,203,136,13,247,57,71,54,55,247,0,156,189,78,131,221,41,241,132,105,182,184,12,53,119,202,171,254,208,238,20,15,29,228,67,255,41,70,23,178,0,46]

export function createNewWeb3Connection(){
    const connection = new Connection(clusterApiUrl("devnet"));
    return connection;
}

export async function getBalanceUsingWeb3(address, connection=null){
    if(connection===null){
        connection = new Connection(clusterApiUrl("devnet"));
    }
    const publicKey = new PublicKey(address);
    return connection.getBalance(publicKey);
}

export function initializeKeyPair(){
    const secret = PRIVATE_KEY;
    const secretKey = Uint8Array.from(secret);
    const keyPair = Keypair.fromSecretKey(secretKey);
    return keyPair;
}

export async function sendSol(connection,amount, to, sender){
    const transaction = new Transaction();
    const instruction=SystemProgram.transfer({
        fromPubkey:sender.publicKey,
        toPubkey:to,
        lamports:amount
    })
    transaction.add(instruction);
    const signature = await sendAndConfirmTransaction(connection,transaction,[sender]);
    return {
        signature:signature,
        link:`https://explorer.solana.com/tx/${signature}?cluster=devnet`,
        message:`View your transaction on the Solana Explorer`
    }
}

export const getLamportsPerSol = () => LAMPORTS_PER_SOL;