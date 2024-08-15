import { HOT, ICE } from "./action";

import { HotIceChoice } from "../components/HotIce";

const HotIceState: HotIceChoice = {
  hot: "뜨거운 음식",
  ice: "차가운 음식",
};

const choiceHotIce = (
  state = HotIceState,
  actoin: { type: string }
): HotIceChoice => {
  switch (actoin.type) {
    case HOT:
      return { ...state, hot: "뜨거운 음식" };
    case ICE:
      return { ...state, hot: "차가운 음식" };
    default:
      return state;
  }
};

export default choiceHotIce;
