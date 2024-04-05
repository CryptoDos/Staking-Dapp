import { useEffect, useState, useContext } from "react";
import { Web3Context } from "../../context/Web3ContextProvider";
import {
  connectWallet,
  handleAccountChange,
  handleChainIdChange,
} from "../../utils";

function Wallet() {
  const [isLoading, setIsLoading] = useState(false);
  const { setState } = useContext(Web3Context);

  useEffect(() => {
    window?.ethereum.on("accountsChanged", () => handleAccountChange(setState));
    window?.ethereum.on("chainChanged", () => handleChainIdChange(setState));

    return () => {
      window?.ethereum.on("accountChanged", () =>
        handleAccountChange(setState)
      );
      window?.ethereum.on("chainChanged", () => handleAccountChange(setState));
    };
  }, []);

  const handleWallet = async () => {
    try {
      setIsLoading(true);
      const {
        provider,
        selectedAccount,
        stakingTokenContract,
        stakingContract,
        chainId,
      } = await connectWallet();
      console.log(
        provider,
        selectedAccount,
        stakingTokenContract,
        stakingContract,
        chainId
      );
      setState({
        provider,
        selectedAccount,
        stakingContract,
        stakingTokenContract,
        chainId,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return <button onClick={handleWallet}>Connect</button>;
}

export default Wallet;
