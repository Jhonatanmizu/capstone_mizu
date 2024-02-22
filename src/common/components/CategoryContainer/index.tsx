// Styles
import "./category.container.styles.scss";
// Types
import { ICategory } from "../../types";
// Components
import Category from "../Category";

interface Props {
  categories: ICategory[];
}

const CategoryContainer = ({ categories }: Props) => {
  return (
    <div className="categories-container">
      {categories.map((category, idx) => (
        <Category
          key={idx}
          title={category.title}
          text={category.text}
          img={category.img}
        />
      ))}
    </div>
  );
};

export default CategoryContainer;
