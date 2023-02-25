import Navbar from "../Navbar";
import MetaMaskNotFound from "../MetaMaskNotFound";
import NotLoggedIn from "../NotLoggedIn";
import React, { useContext, useEffect } from "react";
import { useToDoListProvider } from "../../provider/ToDoListProvider";
import Goerli from "../TestNets/Goerli";
import { GOERLI_ID } from "../../../../todolist/utils/Constants";

type PageProp = {
  children: JSX.Element | JSX.Element[];
};

function Layout({ children }: PageProp) {
  const {
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
    setIsMetamaskNotInstalled,
  } = useToDoListProvider();

  return (
    <div>
      <Navbar
        isConnected={isConnected}
        isLoading={isLoading}
        isError={isError}
        setIsConnected={setIsConnected}
        setIsLoading={setIsLoading}
        setIsError={setIsError}
        address={address}
        setAddress={setAddress}
        chainId={chainId}
        setChainId={setChainId}
        isMetamaskNotInstalled={isMetamaskNotInstalled}
        setIsMetamaskNotInstalled={setIsMetamaskNotInstalled}
      />
      {isMetamaskNotInstalled ? (
        <MetaMaskNotFound />
      ) : isConnected && chainId === GOERLI_ID ? (
        children
      ) : (
        <NotLoggedIn />
      )}
    </div>
  );
}

export default Layout;
