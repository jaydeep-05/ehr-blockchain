import React, { useEffect,useState } from "react";

import abi from '../contract/Ehr.json';

export const AppContext=React.createContext();
  
const contractAddress = "0x71189eC555f07EF449f2B35F339e781BAd5FE916";
const contractABI = abi.abi;
    

export const AppProvider =({children})=>{
    const [connectedAccount,setConnectedAccount] =useState('')
    const checkIfWalletIsConnected = async()=>{
        const {ethereum} = window;
        if(!ethereum) return alert("Please install metamask");
        const accounts = await ethereum.request({method: 'eth_accounts'});
        console.log(accounts);
        
    }
   
    const connectWallet = async () => {
        try {
          const { ethereum } = window;
  
          if (ethereum) {
            const account = await ethereum.request({
              method: "eth_requestAccounts",
            });
            setConnectedAccount(account[0])
            console.log(account[0]);
          } else {
            alert("Please install metamask");
          }
        } catch (error) {
          console.log(error);
        }
      };
      useEffect(()=>{
        checkIfWalletIsConnected();
    },[])
    return (
        <AppContext.Provider value={{connectWallet}}>
            {children}
        </AppContext.Provider>
    )
}

