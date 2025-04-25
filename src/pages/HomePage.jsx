import FeaturedEvents from "../components/sections/FeaturedEvents";
import HeroSection from "../components/sections/HeroSection";
import CategorySection from "../components/sections/CategorySection";
import { useApi } from "../hooks/useApi.js";
import UpcomingEvents from "../components/sections/UpcomingEvents.jsx";

const HomePage = () => {
  const { data, loading, error } = useApi("/home-page");

  // Render error states
  if (error)
    return <div className="text-center py-10 text-red-500">{error}</div>;

  return (
    <>
      <HeroSection />
      <FeaturedEvents loading={loading} featuredEvents={data?.featuredEvents} />
      <CategorySection loading={loading} category={data?.categories} />
      <UpcomingEvents loading={loading} upcomingEvents={data?.upcomingEvents} />
    </>
  );
};

export default HomePage;
