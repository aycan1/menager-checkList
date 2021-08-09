import { getAppAsyncData } from "./Redux/slices/productsSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Topbar from "./Components/Navigation/Topbar";
import ProductPool from "./Components/ProductPool/ProductPool";
import Review from "./Components/Review/Review";
import CategoryPanel from "./Components/CategoryPanel/CategoryPanel";
import "./App.css";

function App() {
  const status = useSelector((state) => state.productsSlice.status);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAppAsyncData());
  }, []);

  console.log(status);
  return status === "loading" ? (
    <div className="loading">loading...</div>
  ) : status === "success" ? (
    <div className="App">
      <div className="top">
        <Topbar />
      </div>
      <div className="mid">
        <div className="left">
          <ProductPool />
          <Review />
        </div>
        <div className="right">
          <CategoryPanel />
        </div>
      </div>
    </div>
  ) : (
    <div>failed</div>
  );
}

export default App;
