import { useNavigate } from "react-router-dom";

import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
export interface MainFoodChoice {
  rice: string;
  noodle: string;
  bread: string;
  snack: string;
}

function MainFood() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { rice, noodle, bread, snack } = useSelector(
    (state: RootState) => state.mainFoodState
  );

  const handleMainClick = (mainType: string, mainName: string) => {
    dispatch({ type: mainType });
    if (mainName === bread) {
      navigate("/Result", {
        state: { selectMain: mainName, mainType: mainType },
      });
    } else if (mainName === snack) {
      navigate("/Spicy", {
        state: { selectMain: mainName, mainType: mainType },
      });
    } else {
      navigate("/FoodStyle", {
        state: { selectMain: mainName, mainType: mainType },
      });
    }
  };

  return (
    <div className="mainFoodSlect">
      <span onClick={() => handleMainClick("RICE_FOOD", rice)}>
        <img src="../rice.png" className="mainFoodImg" />
        <p>{rice}</p>
      </span>
      <span onClick={() => handleMainClick("NOODEL_FOOD", noodle)}>
        <img src="../noodle.jpg" className="mainFoodImg" />
        <p>{noodle}</p>
      </span>
      <span onClick={() => handleMainClick("BREAD_FOOD", bread)}>
        <img src="../bread.png" className="mainFoodImg" />
        <p>{bread}</p>
      </span>
      <span onClick={() => handleMainClick("SNACK_FOOD", snack)}>
        <img src="../snacks.png" className="mainFoodImg" />
        <p>{snack}</p>
      </span>
    </div>
  );
}

export default MainFood;
