import CategoryCard from "../CategoryCard/CategoryCard";
import { addCategory } from "../../Redux/slices/categorySlice";
import { useSelector, useDispatch } from "react-redux";
import "./CategoryPanel.css";

const CategoryPanel = () => {
  const categories = useSelector((state) => state.categorySlice.categories);
  const selectedItems = useSelector((state) => state.productsSlice.checkedList);
  const dispatch = useDispatch();

  const addNewCategory = () => {
    dispatch(addCategory());
  };

  return (
    <>
      {categories &&
        categories.map((category) => (
          <CategoryCard
            key={category.id}
            selectedItems={selectedItems}
            title={category.title}
            id={category.id}
          />
        ))}

      <button className="cat-add-btn" onClick={addNewCategory}>
        ADD NEW CATEGORY
      </button>
    </>
  );
};

export default CategoryPanel;
