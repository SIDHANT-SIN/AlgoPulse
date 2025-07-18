import { Link } from "react-router-dom";

const Header = () => (
  <header className="sticky top-0 z-30 w-full backdrop-blur bg-white/80 shadow-md rounded-b-2xl">
    <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
      <Link to="/" className="flex items-center gap-2">
        <span className="text-2xl font-extrabold bg-gradient-to-r from-indigo-500 to-fuchsia-500 bg-clip-text text-transparent tracking-tight">
          AlgoPulse
        </span>
      </Link>
      <nav className="flex gap-8 text-lg font-medium text-gray-700">
        <Link to="/" className="hover:text-indigo-600 transition">
          Home
        </Link>
        <Link to="/dashboard" className="hover:text-indigo-600 transition">
          Dashboard
        </Link>
        <Link to="/problems" className="hover:text-indigo-600 transition">
          Upcoming Contests
        </Link>
        <Link to="/pastcontest" className="hover:text-indigo-600 transition">
          Past Contests
        </Link>
      </nav>
    </div>
  </header>
);

export default Header;
