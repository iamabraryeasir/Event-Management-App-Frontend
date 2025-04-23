import { CalendarClock, MapPin } from "lucide-react";

const EventCard = () => {
  const data = {};

  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get('/api/events/1'); 
        setEvent(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch event data');
        setLoading(false);
      }
    };

    fetchEvent();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!event) return null;

  return (
    <div className="rounded-lg overflow-hidden shadow-lg">
      <div className="relative">
        <img
          src="https://res.cloudinary.com/dehr27mj3/image/upload/v1745384054/event-banners/mgb7burgd3g7x1tkp1cl.jpg"
          alt=""
        />
        <span className="absolute bottom-4 left-4 bg-primary text-white px-2 py-1 rounded text-sm">
          Programming
        </span>
      </div>

      <div className="p-4 flex flex-col gap-y-2">
        <h3 className="text-lg font-semibold">Programming Event</h3>
        <p className="text-sm text-gray-500 flex items-center gap-x-3">
          <CalendarClock height={20} />
          2023-05-01
        </p>
        <p className="text-sm text-gray-500 flex items-center gap-x-3">
          <MapPin height={20} />
          New York, USA
        </p>
        <p className="text-sm text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, quae, quod, quia quos quibusdam.
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
