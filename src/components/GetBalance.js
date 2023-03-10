import React, { useEffect, useState }  from 'react';
import {getBalanceUsingWeb3, getLamportsPerSol} from '../core';

export default function GetBalance(props) {
    const LOADING_TEXT = 'loading balance...'
    const [balance, setBalance] = useState(LOADING_TEXT)

    function getBalance(){
        setBalance(LOADING_TEXT)
        getBalanceUsingWeb3(props.publicKey, props.connection)
        .then(bal=>{
            setBalance(bal/getLamportsPerSol());
        })
    }
    useEffect(function(){
      getBalance();
    },[])

    return (
        <div style={{display:'flex',gap:'10px'}}>
            <h1>balance = {balance} SOL</h1>
            <button onClick={getBalance}>Refresh Balance</button>
        </div>
    )
}
