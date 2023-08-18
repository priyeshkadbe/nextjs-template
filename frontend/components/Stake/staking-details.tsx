"use client"
import { useAccount, useBalance } from "wagmi";

function StakingDetails() {
  const { address } = useAccount()
  const balance = useBalance({
    address: '0x754c1f12e680E3171e52D9390Fc17C9596d3daB0',
  });
  return (
    <div className="w-full ">
      <div className="p-3">
        <div className="font-bold m-4 text-white text-xl">RT Balance is: {address}</div>
        <div className="font-bold m-4 text-white text-xl">Earned Balance is: </div>
        <div className="font-bold m-4 text-white text-xl">Staked Balance is: </div>
      </div>
      <div className="bg-gray-500 w-full p-4 rounded-md">
        <h1 className="text-white text-2xl">Stake Now!</h1>
        <div className="p-4 flex justify-between">
          <input
            type="number"
            placeholder="amount to stake"
            className="m-2 p-4 bg-slate-300 w-full"
          />
          <button className="m-2 px-4 py-2 bg-gray-400 text-xl rounded ">submit</button>
        </div>
      </div>
    </div>
  );
}

export default StakingDetails