import { useNavigate } from "react-router-dom";

import "../App.css";

function Header() {
  const navigate = useNavigate();

  const goFoodstyle = () => {
    navigate("/");
  };

  return (
    <div className="myHeader">
      <img src="./logo.png" onClick={goFoodstyle} />
      <p />
    </div>
  );
}

export default Header;
