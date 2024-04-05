import { useContext } from "react";
import { Web3Context } from "../../context/Web3ContextProvider";

function ConnectedNetwork() {
  const { state } = useContext(Web3Context);
  if (state.chainId === 11155111) {
    return <p>Connected Network: Sepolia </p>;
  } else {
    return <p>Connected Network: Not Supported </p>;
  }
}

export default ConnectedNetwork;
