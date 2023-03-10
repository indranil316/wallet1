import React, { useEffect, useState } from 'react';
import './css/style.css';
import {getBalanceUsingWeb3} from './core';
import addresses from './data/addresses.json';

export default function App() {  
    const [state,setState] = useState({});   
    useEffect(function(){
        getBalanceUsingWeb3(addresses.soladdr1)
        .then(bal=>{
            setState({...state,balance:bal})
        })
    },[])

    return (
        <div>balance = {state.balance}</div>
    )
}
