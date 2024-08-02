import { ICategory } from "@/common/types";
import { CategoryList } from "./common";

const categories: ICategory[] = [
  { id: 1, title: "Hats", description: "Shop now" },
  { id: 2, title: "Jackets", description: "Shop now" },
  { id: 3, title: "Sneakers", description: "Shop now" },
  { id: 4, title: "Womens", description: "Shop now" },
  { id: 5, title: "Mens", description: "Shop now" },
];

const App = () => {
  return (
    <main className="categories-container">
      <CategoryList categories={categories} />
    </main>
  );
};

export default App;
