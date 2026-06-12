import { Link } from "react-router";

export default function NavBar() {
  return (
    // <div className="navbar">
    //   <div className="nav-logo">Islamic Site</div>
    //   <div className="navbar-links">
    //     <Link to="/" className="nav-link">
    //       Home
    //     </Link>
    //     <Link to="/about" className="nav-link">
    //       About
    //     </Link>
    //     <Link to="/book" className="nav-link">
    //       Book
    //     </Link>
    //   </div>
    // </div>
    <nav className="flex items-center justify-between px-8 py-4 bg-emerald-800 text-white shadow-md">
      <h1 className="text-2xl font-bold tracking-wide">Manhajus Salaf</h1>
      <ul className="hidden md:flex gap-6 text-sm font-medium">
        <li className="hover:text-emerald-300 cursor-pointer">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>

        <li className="hover:text-emerald-300 cursor-pointer">
          <Link to="/quran" className="nav-link">
            Quran
          </Link>
        </li>

        <li className="hover:text-emerald-300 cursor-pointer">
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>

        <li className="hover:text-emerald-300 cursor-pointer">
          <Link to="/book" className="nav-link">
            Book
          </Link>
        </li>
      </ul>
    </nav>
  );
}
