
import React, {createContext, useState} from "react";

export const CryptoContext = createContext();

export const CriptoProvider = ({ children }) => {
    const [coins,setCoins ] = useState([]);


    return (
        <CryptoContext.Provider value={{ coins, setCoins }}>
            {children}
        </CryptoContext.Provider>
    );
};