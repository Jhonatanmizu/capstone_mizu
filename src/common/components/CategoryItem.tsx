interface Props {
  title: string;
  description: string;
  cover: string;
}

export const CategoryItem = ({ title, description, cover }: Props) => {
  return (
    <div className="category-container">
      <div className="category-cover" />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};
