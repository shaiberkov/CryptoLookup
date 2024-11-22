
import React, {useContext, useState} from "react";
import {CryptoContext} from "./CryptoContext";

function CryptoChoose() {
    const [chosenCoin,setChosenCoin] = useState("");
    const {setCoins,coins}=useContext(CryptoContext);

    const onCoinChoose = () => {
        setCoins((prev) =>

            prev.some((coin) => coin === chosenCoin)
                ? prev
                : [...prev, chosenCoin]
        );
        setChosenCoin("")
    }
    // const dispalyCoins=()=>{
    //
    //     return(
    //     coins.map((coin, index) => (
    //         <div id={index}> {coin}</div>
    //     ))
    //     )
    // }




    return (
        <div>
            <input value={chosenCoin} onChange={(e) =>setChosenCoin(e.target.value)} placeholder="Enter Coin" />
            <button onClick={onCoinChoose} > enter</button>
            {/*{coins.length>0 && (dispalyCoins())}*/}



        </div>
    )
}
export default CryptoChoose;


