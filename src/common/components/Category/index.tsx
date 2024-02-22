// Styles
import "./categories.styles.scss";

interface Props {
  title: string;
  text: string;
  img: string;
}

const Category = ({ title, text, img }: Props) => {
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${img})`,
        }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Category;
