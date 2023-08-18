import { ConnectButton } from "@rainbow-me/rainbowkit"
import { useAccount } from "wagmi";
import Unauthenticated from "../Unauthenticated"
import StakingDetails from "../Stake/staking-details";


function Welcome() {
  const { address, isConnecting, isDisconnected } = useAccount();

  if (isConnecting) return <div>Connecting…</div>;
  if (isDisconnected) return <Unauthenticated/>;
  return <div><StakingDetails/></div>;
}

export default Welcome;
