import RewardRate from "./RewardRate";
import StakedAmount from "./StakedAmount";
import EarnedReward from "./EarnedReward";

function DisplayPanel() {
  return (
    <div>
      <StakedAmount /> <RewardRate /> <EarnedReward />
    </div>
  );
}

export default DisplayPanel;
