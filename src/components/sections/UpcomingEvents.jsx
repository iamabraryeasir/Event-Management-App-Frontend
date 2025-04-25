import { MoveRight } from "lucide-react";
import EventCard from "../ui/EventCard";
import { Link } from "react-router";

const UpcomingEvents = ({ upcomingEvents, loading }) => {
  return (
    <section className="max-w-6xl mx-auto py-10">
      <div className="flex items-center justify-between">
        <span className="text-2xl font-semibold">Featured Events</span>
        <Link to="/events">
          <span className="flex items-center gap-x-2 text-primary">
            View All
            <MoveRight />
          </span>
        </Link>
      </div>
      {loading ? (
        <div className="grid grid-cols-4 gap-5 py-6">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="h-[200px] bg-gray-200 rounded-lg"></div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-5 py-6">
          {upcomingEvents?.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      )}
    </section>
  );
};

export default UpcomingEvents;
