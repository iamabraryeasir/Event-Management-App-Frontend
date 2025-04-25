const CategoryCard = ({ category }) => {
  return (
    <div className="bg-white shadow-md hover:-translate-y-1 transition-transform duration-150 text-center cursor-pointer py-5 font-medium rounded-md">
      {category?.name}
    </div>
  );
};

export default CategoryCard;
