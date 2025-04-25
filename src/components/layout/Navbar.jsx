import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="max-w-6xl mx-auto flex justify-between items-center py-4">
      <span className="text-2xl font-semibold text-primary">
        <Link to="/">EventsPro</Link>
      </span>

      <ul className="flex gap-x-4">
        <li>
          <NavLink to="/" className="hover:text-primary">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/events" className="hover:text-primary">
            Events
          </NavLink>
        </li>
      </ul>

      <div className="space-x-4">
        <Link to="/login" className="btn">
          Login
        </Link>
        <Link to="/signup" className="btn btn-primary">
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
