import { useContext } from "react";
import { Web3Context } from "../../context/Web3ContextProvider";

function ConnectedAccount() {
  const { state } = useContext(Web3Context);

  return <p>Connected Account:{state.selectedAccount}</p>;
}

export default ConnectedAccount;
