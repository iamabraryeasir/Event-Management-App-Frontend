import { useState, useMemo } from "react";
import { useApi } from "../hooks/useApi";
import EventCard from "../components/ui/EventCard";

const EventsPage = () => {
  const [filters, setFilters] = useState({
    category: "",
    location: "",
    date: "",
  });

  const { data, loading, error } = useApi("/events");

  const filteredEvents = useMemo(() => {
    if (!data?.events) return [];

    return data.events.filter((event) => {
      const matchCategory =
        !filters.category || event.categoryInfo._id === filters.category;
      const matchLocation =
        !filters.location || event.location === filters.location;
      const matchDate =
        !filters.date ||
        new Date(event.date).toISOString().split("T")[0] === filters.date;

      return matchCategory && matchLocation && matchDate;
    });
  }, [data?.events, filters]);

  if (error)
    return <div className="text-center py-10 text-red-500">{error}</div>;

  return (
    <div className="max-w-6xl mx-auto mb-8">
      {/* Filters */}
      <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <select
          className="border rounded-lg p-2"
          value={filters.category}
          onChange={(e) => setFilters({ ...filters, category: e.target.value })}
        >
          <option value="">All Categories</option>
          {data?.events
            ?.reduce((categories, event) => {
              if (
                !categories.find((cat) => cat._id === event.categoryInfo._id)
              ) {
                categories.push(event.categoryInfo);
              }
              return categories;
            }, [])
            .map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
        </select>

        <select
          className="border rounded-lg p-2"
          value={filters.location}
          onChange={(e) => setFilters({ ...filters, location: e.target.value })}
        >
          <option value="">All Locations</option>
          {data?.events
            ?.reduce((locations, event) => {
              if (!locations.includes(event.location)) {
                locations.push(event.location);
              }
              return locations;
            }, [])
            .map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
        </select>

        <input
          type="date"
          className="border rounded-lg p-2"
          value={filters.date}
          onChange={(e) => setFilters({ ...filters, date: e.target.value })}
        />
      </div>

      {/* Events Grid */}
      {loading ? (
        <div className="text-center py-10">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      )}
    </div>
  );
};

export default EventsPage;
