import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import '../css/header.css'

export default function Header() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const linkClass = (path: string) =>
    `block px-3 py-2 rounded-md transition
     ${location.pathname === path
       ? "text-red-400 font-bold"
       : "text-white hover:text-red-300"}`;

  return (
    <header className="bg-gray-800 border-b shadow-lg border-black" id="header">
      <nav className="max-w-6xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <h1 className="text-xl font-bold" id="logo">
            <Link to='/' className={linkClass("/")}>André Bayona</Link>
          </h1>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white focus:outline-none text-xl"
            aria-label="Toggle menu"
          >
            ☰
          </button>

          {/* Menú desktop */}
          <ul className="hidden md:flex gap-2 ">
            <li><Link to="/" className={linkClass("/")}>Home</Link></li>
            <li><Link to="/projects" className={linkClass("/projects")}>Projects</Link></li>
            <li><Link to="/contact" className={linkClass("/contact")}>Contact</Link></li>
          </ul>
        </div>

        {/* Menú mobile */}
        {open && (
          <ul className="md:hidden pb-4 space-y-2">
            <li><Link to="/" onClick={() => setOpen(false)} className={linkClass("/")}>Home</Link></li>
            <li><Link to="/projects" onClick={() => setOpen(false)} className={linkClass("/projects")}>Projects</Link></li>
            <li><Link to="/contact" onClick={() => setOpen(false)} className={linkClass("/contact")}>Contact</Link></li>
          </ul>
        )}
      </nav>
    </header>
  );
}
