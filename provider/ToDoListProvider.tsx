import React, { FC, useState, useEffect,useContext } from "react";
import { ethers } from "ethers";

interface Props {
  children: React.ReactNode;
}

interface ToDoListContextType {
  isConnected: boolean;
  setIsConnected: (value: boolean) => void;
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  isError: boolean;
  setIsError: (value: boolean) => void;
  address: string;
  setAddress: (value: string) => void;
  chainId: number;
  setChainId: (value: number) => void;
  isMetamaskNotInstalled:boolean;
  setIsMetamaskNotInstalled: (value:boolean)=>void;
}

export const ToDoListContext = React.createContext<ToDoListContextType | null>(
  null
);

export const ToDoListProvider = ({ children }: Props) => {
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [address, setAddress] = useState<string>('');
  const [chainId, setChainId] = useState<number>(0);
  const [isMetamaskNotInstalled,setIsMetamaskNotInstalled] = useState<boolean>(false);
  
  const value = {
    isConnected,
    setIsConnected,
    isLoading,
    setIsLoading,
    isError,
    setIsError,
    address,
    setAddress,
    chainId,
    setChainId,
    isMetamaskNotInstalled,
    setIsMetamaskNotInstalled
  };
  return (
    <ToDoListContext.Provider value={value}>
      {children}
    </ToDoListContext.Provider>
  );
};


export const useToDoListProvider=():ToDoListContextType=>{
  const context = useContext(ToDoListContext);

  if (context === null) {
    throw new Error(
      `Received null while calling useContext(ToDoListContext), did you forget to put the provider ?`
    );
  }

  return context;
}