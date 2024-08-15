import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";

import "../App.css";

export interface HotIceChoice {
  hot: string;
  ice: string;
}

function HotIce() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { selectMain, mainType, foodType, selectFood, selectSpicy, spicyType } =
    location.state;

  const { hot, ice } = useSelector((state: RootState) => state.hotIceState);

  const handleHotIceClick = (hotIceType: string, hotIceName: string) => {
    dispatch({ type: hotIceType });
    navigate("/Result", {
      state: {
        selectMain,
        mainType,
        foodType,
        selectFood,
        selectSpicy,
        spicyType,
        selectHotIce: hotIceName,
        hotIceType,
      },
    });
  };

  return (
    <div className="hotIceSlect">
      <span onClick={() => handleHotIceClick("HOT", hot)}>
        <img src="../hot.jpg" className="hotIceImg" />
        <p>{hot}</p>
      </span>
      <span onClick={() => handleHotIceClick("ICE", ice)}>
        <img src="../ice.jfif" className="hotIceImg" />
        <p>{ice}</p>
      </span>
    </div>
  );
}

export default HotIce;
