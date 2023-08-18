import { ConnectButton } from "@rainbow-me/rainbowkit";




function Navbar() {
  return (
    <div className="w-full bg-[#1D2233] h-20 md:h-24">
      <div className="flex mx-auto justify-between items-center  p-6 md:w-2/3">
        <h1 className="text-xl md:text-3xl text-gray-100">Staking Dapp</h1>
        <div className="flex gap-x-4 justify-center items-center">
          <ConnectButton/>
        </div>
      </div>
      <hr/>
    </div>
  );
}

export default Navbar;
