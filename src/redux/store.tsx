import { combineReducers, createStore } from "redux";
import choiceFoodReducer from "./styleReduce";
import choiceMainFoodReducer from "./mainReducer";
import choiceSpicy from "./spicyReduce";
import choiceHotIce from "./hotIceReduce";

const rootReducer = combineReducers({
  foodStyleState: choiceFoodReducer,
  mainFoodState: choiceMainFoodReducer,
  spicyState: choiceSpicy,
  hotIceState: choiceHotIce,
});

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

export default store;
