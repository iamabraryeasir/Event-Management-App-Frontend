import { MoveRight } from "lucide-react";
import CategoryCard from "../ui/CategoryCard";
import { Link } from "react-router";

const CategorySection = ({ category, loading }) => {
  return (
    <section className="max-w-6xl mx-auto py-10">
      <div className="flex items-center justify-between">
        <span className="text-2xl font-semibold">Top Categories</span>
        <Link to="/events">
          <span className="flex items-center gap-x-2 text-primary">
            View All
            <MoveRight />
          </span>
        </Link>
      </div>

      {loading ? (
        <div className="grid grid-cols-5 gap-6 py-6">
          {Array.from({ length: 10 }).map((_, index) => (
            <CategoryCard key={index} loading={loading} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-5 gap-6 py-6">
          {category?.map((category, index) => (
            <CategoryCard key={index} category={category} />
          ))}
        </div>
      )}
    </section>
  );
};

export default CategorySection;
