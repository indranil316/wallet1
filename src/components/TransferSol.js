import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { initializeKeyPair, sendSol, getLamportsPerSol} from '../core';
import { Keypair } from '@solana/web3.js';

export default function TransferSol(props) {
  const [sig,setSig] = useState(null);
  const [amount, setAmount] = useState(0);

  async function transaction(connection, amount){
    const payer = initializeKeyPair();
    const res = await sendSol(connection,amount*getLamportsPerSol(), Keypair.generate().publicKey,payer)
    return res;
  }
  function onChangehandler(e){
      var re = /^[-+]?[0-9]+\.[0-9]+$/;
      if(e.target.name==="amount"){
          if(e.target.value.match(re)){
              setAmount(Number(e.target.value))
          }
      }
  }

  async function submitTransaction(){
      const res = await transaction(props.connection,amount);
      setSig(res);
  }
  return (
    <div>
       <input 
        type="text" 
        name="amount" 
        placeholder='Enter amount to Sol to be transfered' 
        onChange={onChangehandler}
      />

      <button onClick={submitTransaction}>Do Transaction</button>     

      { sig!==null ? <div>
        <Link to={sig.link}>{sig.message}</Link>
        <p>Transaction Signature : <span>{sig.signature}</span></p>
      </div> : null}   
    </div>
  )
}
