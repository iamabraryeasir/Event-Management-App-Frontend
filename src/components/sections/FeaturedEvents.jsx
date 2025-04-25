import { MoveRight } from "lucide-react";
import EventCard from "../ui/EventCard";

const FeaturedEvents = ({ featuredEvents }) => {
  return (
    <section className="max-w-6xl mx-auto py-10">
      <div className="flex items-center justify-between">
        <span className="text-2xl font-semibold">Featured Events</span>
        <span className="flex items-center gap-x-2 text-primary">
          View All
          <MoveRight />
        </span>
      </div>

      <div className="grid grid-cols-3 gap-12 py-6">
        {featuredEvents?.map((event) => (
          <EventCard event={event} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedEvents;
