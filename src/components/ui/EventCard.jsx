import { CalendarClock, MapPin } from "lucide-react";

const EventCard = ({ event }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg ">
      <div className="relative h-[200px] overflow-hidden">
        <img
          src={event?.banner}
          alt=""
          className="h-full w-full object-cover"
        />
        <span className="absolute bottom-4 left-4 bg-primary text-white px-2 py-1 rounded text-sm">
          {event?.categoryInfo?.name}
        </span>
      </div>

      <div className="p-4 flex flex-col gap-y-2">
        <h3 className="text-lg font-semibold">{event?.name}</h3>
        <p className="text-sm text-gray-500 flex items-center gap-x-3">
          <CalendarClock height={20} />
          {event?.date}
        </p>
        <p className="text-sm text-gray-500 flex items-center gap-x-3">
          <MapPin height={20} />
          {event?.location}
        </p>
        <p className="text-sm text-gray-500">
          {event?.description?.length > 150
            ? `${event.description.slice(0, 150)}...`
            : event?.description}
        </p>

        <div className="flex items-center justify-between mt-4">
          <button className="btn">Register</button>
          <button className="btn bg-indigo-500 text-white font-medium">
            Save for later
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
