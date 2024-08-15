import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";

import "../App.css";

export interface FoodStyleChoice {
  korea: string;
  chinese: string;
  japanese: string;
  western: string;
}

function FoodStyle() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { selectMain, mainType } = location.state;

  const { korea, chinese, japanese, western } = useSelector(
    (state: RootState) => state.foodStyleState
  );

  const handleStyleClick = (foodType: string, foodName: string) => {
    dispatch({ type: foodType });
    navigate("/Spicy", {
      state: { selectMain, mainType, selectFood: foodName, foodType },
    });
  };

  return (
    <>
      <div className="mainSelect">
        <span onClick={() => handleStyleClick("KOREA_FOODS", korea)}>
          <img src="../koreaFood.gif" className="mainImg" alt="한식" />
          <p>{korea}</p>
        </span>
        <span onClick={() => handleStyleClick("WESTERN_FOODS", western)}>
          <img src="../westernFood.jpg" className="mainImg" alt="양식" />
          <p>{western}</p>
        </span>
        <span onClick={() => handleStyleClick("CHINESE_FOODS", chinese)}>
          <img src="../chineseFood.jpg" className="mainImg" alt="중식" />
          <p>{chinese}</p>
        </span>
        <span onClick={() => handleStyleClick("JAPANESE_FOODS", japanese)}>
          <img src="../japaneseFood.jpg" className="mainImg" alt="일식" />
          <p>{japanese}</p>
        </span>
      </div>
    </>
  );
}

export default FoodStyle;
