import { RICE_FOODS, NOODEL_FOODS, BREAD_FOODS, SNACK_FOODS } from "./action";

import { MainFoodChoice } from "../components/MainFood";

const mainFoodState: MainFoodChoice = {
  rice: "밥",
  noodle: "면",
  bread: "빵",
  snack: "간식",
};

const choiceMainFoodReducer = (
  state = mainFoodState,
  action: { type: string }
): MainFoodChoice => {
  switch (action.type) {
    case RICE_FOODS:
      return { ...state, rice: "밥" };
    case NOODEL_FOODS:
      return { ...state, noodle: "면" };
    case BREAD_FOODS:
      return { ...state, bread: "빵" };
    case SNACK_FOODS:
      return { ...state, snack: "간식" };
    default:
      return state;
  }
};

export default choiceMainFoodReducer;
