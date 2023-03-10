import React, { useEffect, useState } from 'react';
import {createNewWeb3Connection, PRIVATE_KEY} from './core';
import {BrowserRouter} from 'react-router-dom';
import './css/style.css';

import GetBalance from './components/GetBalance';
import TransferSol from './components/TransferSol';
import { Keypair } from '@solana/web3.js';


export default function App() {  
    const [publicKey, setPubllicKey] = useState(null);
    const [connection,setConnection] = useState(null);

    useEffect(function(){
        setPubllicKey(Keypair.fromSecretKey(Uint8Array.from(PRIVATE_KEY)).publicKey)
        const connection = createNewWeb3Connection();
        setConnection(connection)
        // connection.requestAirdrop();
    },[])

    if(connection===null && publicKey===null){
        return (
            <div>
              creating connection...   
            </div>
        )
    }
    return (
        <div>
            <BrowserRouter>
                <GetBalance publicKey={publicKey} connection={connection}/>
                <TransferSol publicKey={publicKey} connection={connection}/> 
            </BrowserRouter>
        </div>
    )
}
