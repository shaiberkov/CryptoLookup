import React, {useContext, useEffect, useState} from "react";
import {CryptoContext} from "./CryptoContext";
import axios from "axios";

function CoinDisplayer(){
    const {coins}=useContext(CryptoContext);
    const [coinData,setCoinData]=useState([]);


    useEffect(() => {
        const getData=async () => {
            if(coins.length>0){
                const currCoinData = await axios.get(
                            `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coins[coins.length-1]}`)
                        setCoinData(prevState => [...prevState, currCoinData.data[0]])
            }

        }

        getData();


    },[coins])




    return (


        <div>
            {coinData.length } length

            <h3>נתוני מטבעות:</h3>
            {coinData.map((coin) => (
                <div key={coin.id}>
                    <img src={coin.image} alt={coin.name} style={{ width: "50px" }} />
                    <p>שם: {coin.name}</p>
                    <p>מחיר נוכחי: ${coin.current_price}</p>
                    <p>שווי שוק: ${coin.market_cap.toLocaleString()}</p>
                    <hr />
                </div>
            ))}
            <h4>מספר המטבעות: {coins.length}</h4>
        </div>
    );


}


export default CoinDisplayer;