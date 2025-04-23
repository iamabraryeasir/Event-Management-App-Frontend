import { Link } from "react-router";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-violet-600 to-indigo-600">
      <div className="max-w-6xl mx-auto py-20 flex flex-col gap-y-6 items-start">
        <h1 className="text-5xl font-bold text-white">
          Discover Amazing Events
          <br />
          Happening Around You
        </h1>
        <p className="text-lg text-white">
          Find and join local events, or create your own to share with the
          community.
        </p>
        <div className="space-x-4">
          <Link to="/events" className="btn">
            Explore Events
          </Link>
          <Link to="/events/create" className="btn">
            Create Event
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
