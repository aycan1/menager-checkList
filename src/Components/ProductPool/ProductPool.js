import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleProduct,
  checkedProducts,
  unCategorizedProducts,
} from "../../Redux/slices/productsSlice";
import SingleProduct from "../SingleProduct/SingleProduct";
import "./ProductPool.css";
import StorefrontRoundedIcon from "@material-ui/icons/StorefrontRounded";

const ProductPool = () => {
  const products = useSelector((state) => state.productsSlice.products);
  const checkedList = products.filter((item) => item.checked === true);
  const unCategorizedList = products.filter((item) => item.checked === false);
  const dispatch = useDispatch();

  const handleCheck = (e) => {
    dispatch(toggleProduct(e.target.id));
  };

  useEffect(() => {
    dispatch(checkedProducts(checkedList));
    dispatch(unCategorizedProducts(unCategorizedList));
  }, [checkedList, unCategorizedList]);

  return (
    <div className="pool">
      <div className="title">
        <div>
          <StorefrontRoundedIcon className="title-icon" />
        </div>
        <div className="title-text">
          <h2>Product Pool</h2>
        </div>
      </div>
      <hr />
      <div className="card">
        <ul>
          {products &&
            products.map((item) => (
              <SingleProduct
                key={item.id}
                item={item}
                handleCheck={handleCheck}
              />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductPool;
