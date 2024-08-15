import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import "../App.css";
import stateCombination from "./StateCombination";
import { BREAD_FOODS, SNACK_FOODS } from "../redux/action";

function Result() {
  const navigate = useNavigate();
  const location = useLocation();
  const { mainType, foodType, spicyType, hotIceType } = location.state;

  const [result, setResult] = useState({ image: "", description: "" });

  useEffect(() => {
    let currentCombination = "";
    if (mainType === BREAD_FOODS) {
      currentCombination = `${mainType}`;
    } else if (mainType === SNACK_FOODS) {
      currentCombination = `${mainType}-${spicyType}-${hotIceType}`;
    } else {
      currentCombination = `${mainType}-${foodType}-${spicyType}-${hotIceType}`;
    }

    const filterFoods = stateCombination.filter(
      (item) => item.combination === currentCombination
    );

    if (filterFoods.length > 0) {
      const randomResult =
        filterFoods[Math.floor(Math.random() * filterFoods.length)];
      setResult(randomResult);
    } else {
      setResult({
        image: "default_image.jpg",
        description: "해당 음식을 불러 올 수 없습니다.",
      });
    }
  }, [mainType, foodType, spicyType, hotIceType]);

  const goFoodstyle = () => {
    navigate("/");
  };

  return (
    <div className="resultView">
      <img src="../backgroundImg.png" className="backgroundImg"></img>
      <span>
        <img src={result.image} alt="Result" className="resultImg" />
        <p>★ {result.description} ★</p>
      </span>

      <button onClick={goFoodstyle}>
        다른 음식 고르러 가기 <img src="../rightF.png" />
      </button>
    </div>
  );
}

export default Result;
