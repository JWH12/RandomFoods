import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import FoodStyle from "./components/FoodStyle";
import MainFood from "./components/MainFood";
import Spicy from "./components/Spicy";
import HotIce from "./components/HotIce";
import Result from "./components/Result";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Header></Header>
          <div className="App">
            <Routes>
              <Route path="/" element={<MainFood />} />
              <Route path="/FoodStyle" element={<FoodStyle />} />
              <Route path="/Spicy" element={<Spicy />} />
              <Route path="/HotIce" element={<HotIce />} />
              <Route path="/Result" element={<Result />} />
            </Routes>
          </div>
          <Footer></Footer>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
