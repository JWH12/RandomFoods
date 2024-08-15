import {
  KOREA_FOODS,
  JAPANESE_FOODS,
  CHINESE_FOODS,
  WESTERN_FOODS,
} from "./action";
import { FoodStyleChoice } from "../components/FoodStyle";

const foodStyleState: FoodStyleChoice = {
  korea: "한식",
  chinese: "중식",
  japanese: "일식",
  western: "양식",
};

const choiceFoodReducer = (
  state = foodStyleState,
  action: { type: string }
): FoodStyleChoice => {
  switch (action.type) {
    case KOREA_FOODS:
      return { ...state, korea: "한식" };
    case WESTERN_FOODS:
      return { ...state, western: "양식" };
    case JAPANESE_FOODS:
      return { ...state, japanese: "일식" };
    case CHINESE_FOODS:
      return { ...state, chinese: "중식" };
    default:
      return state;
  }
};

export default choiceFoodReducer;
