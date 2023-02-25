import { FC } from "react";

function MetaMaskNotFound() {
  return (
    <div className="bg-[#0F1425] h-screen  flex justify-center ">
      <h1 className="text-3xl text-center text-gray-100 mt-16 px-4 sm:mt-32">
        Please Install Metamask and reload the browser
      </h1>
    </div>
  );
}

export default MetaMaskNotFound;
