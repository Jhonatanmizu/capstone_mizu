// Styles
import "./styles.scss";

interface Props {
  title: string;
  description: string;
  imageUrl: string;
}

export const CategoryItem = ({ title, description, imageUrl }: Props) => {
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};
