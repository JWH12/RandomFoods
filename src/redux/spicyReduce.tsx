import { SPICY, NOT_SPICY } from "./action";

import { SpicyChoice } from "../components/Spicy";

const spicyState: SpicyChoice = {
  spicy: "매운 음식",
  notSpicy: "안매운 음식",
};

const choiceSpicy = (
  state = spicyState,
  action: { type: string }
): SpicyChoice => {
  switch (action.type) {
    case SPICY:
      return { ...state, spicy: "매운 음식" };
    case NOT_SPICY:
      return { ...state, notSpicy: "안매운 음식" };
    default:
      return state;
  }
};

export default choiceSpicy;
