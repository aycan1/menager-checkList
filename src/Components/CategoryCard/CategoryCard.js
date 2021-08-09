import BookOutlinedIcon from "@material-ui/icons/BookOutlined";
import AddCircleOutlineRoundedIcon from "@material-ui/icons/AddCircleOutlineRounded";
import { useDispatch, useSelector } from "react-redux";
import { removeCategory } from "../../Redux/slices/categorySlice";
import { removeProduct } from "../../Redux/slices/productsSlice";
import { removeAllProducts } from "../../Redux/slices/productsSlice";
import { toggleCategorizedProduct } from "../../Redux/slices/productsSlice";
import { setProducts } from "../../Redux/slices/productsSlice";
import { setProductsRemainingList } from "../../Redux/slices/productsSlice";

const CategoryCard = ({ title, id }) => {
  const dispatch = useDispatch();

  const checkedProducts = useSelector(
    (state) => state.productsSlice.checkedList
  );
  const categorizedList = useSelector(
    (state) => state.productsSlice.categorizedList
  );

  const addItem = (e) => {
    dispatch(setProducts(e.target.id));
    dispatch(setProductsRemainingList());
  };
  const handleCheck = (e) => {
    dispatch(toggleCategorizedProduct(e.target.id));
  };

  const removeItem = (e) => {
    dispatch(removeProduct(e.target.id));
  };

  const handleRemoveCategory = (e) => {
    dispatch(removeCategory(e.target.id));
    dispatch(removeAllProducts(e.target.id));
  };

  return (
    <div className="cat-card">
      <div className="top">
        <div className="title">
          <div>
            <BookOutlinedIcon className="title-icon" />
          </div>
          <div className="title-text">{title}</div>
        </div>
      </div>
      <div className="mid-sec">
        {categorizedList.length === 0 ? (
          <div className="defaultCard">
            <AddCircleOutlineRoundedIcon className="plus-icon" />
            <p>Select Your Goods To Manage Them!</p>
          </div>
        ) : (
          <div className="card">
            <ul>
              {categorizedList.map(
                (item) =>
                  +item.categorized.id === id && (
                    <li key={item.id}>
                      <div className="inputGroup">
                        <label className="inputLabel">{item.title}</label>
                        <input
                          id={item.id}
                          className="inputField"
                          type="checkbox"
                          onChange={handleCheck}
                        />
                      </div>
                    </li>
                  )
              )}
            </ul>
          </div>
        )}
      </div>

      <div className="bottom">
        <div className="prd-btns">
          <button
            disabled={checkedProducts.length > 0 ? false : true}
            className="add-prd"
            id={id}
            onClick={addItem}
          >
            Add # Product(s)
          </button>
          <button
            className="remove-prd"
            disabled={checkedProducts.length > 0 ? true : false}
            onClick={removeItem}
          >
            Remove Product
          </button>
        </div>
        <div className="prd-btns">
          <button className="remove-cat" id={id} onClick={handleRemoveCategory}>
            Remove Category
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
