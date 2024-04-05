import { useState, useContext, useEffect } from "react";
import { Web3Context } from "../../context/Web3ContextProvider";

function StakedAmount() {
  const { state } = useContext(Web3Context);
  const [stakedAmount, setStakedAmount] = useState();

  useEffect(() => {
    const fetchStakedBalance = async () => {
      try {
        //  console.log("stakingContract", state.stakingContract);
        const amountStaked = await state.stakingContract.stakedBalance(
          state.selectedAccount
        );
        console.log("amountStaked", parseInt(amountStaked, 16));
      } catch (error) {
        console.log(error);
      }
    };
    state.stakingContract && fetchStakedBalance();
  }, [state.stakingContract, state.selectedAccount]);
  return <div />;
}

export default StakedAmount;
