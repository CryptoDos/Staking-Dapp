import { useState, createContext } from "react";

export const Web3Context = createContext();

const Web3ContextProvider = ({ children }) => {
  const [state, setState] = useState({
    provider: null,
    selectedAccount: null,
    stakingContract: null,
    stakingTokenContract: null,
    chainId: null,
  });

  return (
    <Web3Context.Provider value={{ state, setState }}>
      {children}
    </Web3Context.Provider>
  );
};
export default Web3ContextProvider;
