import { ethers, Contract } from "ethers";
import StakingTokenAbi from "../abis/StakeTokenAbi.json";
import StakingAbi from "../abis/StakingAbi.json";

export const connectWallet = async () => {
  let signer, provider, stakingContract, stakingTokenContract, chainId;

  if (window.ethereum == null) {
    throw new Error("Metamask is not installed");
  }

  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });

  let selectedAccount = accounts[0];
  if (!selectedAccount) {
    throw new "No ethereum account available"();
  }

  let chainIdHex = await window.ethereum.request({ method: "eth_chainId" });

  chainId = parseInt(chainIdHex, 16);

  provider = new ethers.BrowserProvider(window.ethereum);
  signer = await provider.getSigner();
  const stakingContractAddress = "0xA65E1e2674eAFAc2bBB21aBA1b2F01f23e2C610C";
  const stakingTokenAddress = "0xec11A25f2C7E3A5EC92cbB76eEbBd5B846b5253d";

  stakingContract = new Contract(stakingContractAddress, StakingAbi, signer);
  stakingTokenContract = new Contract(
    stakingTokenAddress,
    StakingTokenAbi,
    signer
  );

  return {
    provider,
    selectedAccount,
    stakingTokenContract,
    stakingContract,
    chainId,
  };
};

export const handleAccountChange = async (setState) => {
  console.log("Account Changed");
  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  const selectedAccount = accounts[0];
  setState((prevState) => ({ ...prevState, selectedAccount }));
};

export const handleChainIdChange = async (setState) => {
  const chainIdHex = await window.ethereum.requests({ method: "eth_chainId" });
  const chainId = parseInt(chainIdHex, 16);
  setState((prevState) => ({ ...prevState, chainId }));
};
