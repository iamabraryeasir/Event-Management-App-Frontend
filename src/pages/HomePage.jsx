import FeaturedEvents from "../components/sections/FeaturedEvents";
import HeroSection from "../components/sections/HeroSection";
import CategorySection from "../components/sections/CategorySection";
import { useApi } from "../hooks/useApi.js";

const HomePage = () => {
  const { data, loading, error } = useApi("/home-page");

  console.log(data);

  // Render loading or error states
  if (loading)
    return <div className="text-center py-10">Loading events...</div>;
  if (error)
    return <div className="text-center py-10 text-red-500">{error}</div>;

  return (
    <>
      <HeroSection />
      <FeaturedEvents featuredEvents={data?.featuredEvents} />
      <CategorySection category={data?.categories} />
    </>
  );
};

export default HomePage;
