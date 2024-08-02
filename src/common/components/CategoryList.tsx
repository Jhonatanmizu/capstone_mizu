import { ICategory } from "@/common/types";
import { CategoryItem } from "@/common";

interface Props {
  categories: ICategory[];
}

export const CategoryList = ({ categories = [] }: Props) => {
  return (
    <section className="categories-container">
      {categories.map((category) => (
        <CategoryItem
          key={category.id}
          title={category.title}
          description={category.description}
          cover=""
        />
      ))}
    </section>
  );
};
