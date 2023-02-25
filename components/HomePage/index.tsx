import { FC, useEffect } from "react";
import { useToDoListProvider } from "../../provider/ToDoListProvider";

interface Props {
  children: React.ReactNode;
}

function HomePage({ children }: Props) {
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
    <div className="bg-[#0F1425] h-screen">
      <div className="flex justify-center items-center p-4 md:p-6">
          {children}
      </div>
    </div>
  );
}

export default HomePage;
