import { useLocation, useNavigate } from "react-router-dom";

import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";

export interface SpicyChoice {
  spicy: string;
  notSpicy: string;
}

function Spicy() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { selectMain, mainType, foodType, selectFood } = location.state;

  const { spicy, notSpicy } = useSelector(
    (state: RootState) => state.spicyState
  );

  const handleSpicyClick = (spicyType: string, spicyName: string) => {
    dispatch({ type: spicyType });
    navigate("/HotIce", {
      state: {
        selectMain,
        mainType,
        selectFood,
        foodType,
        selectSpicy: spicyName,
        spicyType,
      },
    });
  };

  return (
    <>
      <div className="spicySelect">
        <span onClick={() => handleSpicyClick("SPICY", spicy)}>
          <img src="../spicy.jpg" className="spicyImg" />
          <p>{spicy}</p>
        </span>
        <span onClick={() => handleSpicyClick("NOT_SPICY", notSpicy)}>
          <img src="../not_spicy.jpg" className="spicyImg" />
          <p>{notSpicy}</p>
        </span>
      </div>
    </>
  );
}

export default Spicy;
