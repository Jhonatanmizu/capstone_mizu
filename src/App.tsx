// Styles
import "./App.css";
// Components
import { Category, CategoryContainer } from "./common";
// Types
import { ICategory } from "./common/types";

const categories: ICategory[] = [
  {
    title: "Hats",
    text: "SHop now",
    img: "",
  },
  {
    title: "Hats",
    text: "SHop now",
    img: "",
  },
  {
    title: "Hats",
    text: "SHop now",
    img: "",
  },
  {
    title: "Hats",
    text: "SHop now",
    img: "",
  },
];

const App = () => {
  return <CategoryContainer categories={categories} />;
};

export default App;
