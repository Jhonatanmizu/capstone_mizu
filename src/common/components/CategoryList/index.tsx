import { ICategory } from "@/common/types";
import { CategoryItem } from "@/common";
// Styles
import "./styles.scss";

const categories: ICategory[] = [
  {
    id: 1,
    title: "hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    description: "Buy now",
  },
  {
    id: 2,
    title: "jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    description: "Buy now",
  },
  {
    id: 3,
    title: "sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    description: "Buy now",
  },
  {
    id: 4,
    title: "womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    description: "Buy now",
  },
  {
    id: 5,
    title: "mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    description: "Buy now",
  },
];

export const CategoryList = () => {
  return (
    <section className="categories-container">
      {categories.map((category) => (
        <CategoryItem
          key={category.id}
          title={category.title}
          imageUrl={category.imageUrl}
          description={category.description}
        />
      ))}
    </section>
  );
};
