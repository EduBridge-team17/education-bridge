import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import EduLogo from "../assets/EduLogo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-orange-500 font-semibold"
      : "text-neutral-3000 hover:text-primary-700 transition";

  const baseNav = "text-neutral-3000 hover:text-primary-700 transition";
  return (
    <nav className="w-full px-4 md:px-10 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/*Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 bg-primary-800 rounded-full flex items-center justify-center">
            <img
              src={EduLogo}
              alt="Education Bridge Logo"
              className="w-6 h-6"
            />
          </div>
          <h1 className="font-primary text-h4 font-semibold text-primary-800">
            {" "}
            Education Bridge{" "}
          </h1>
        </NavLink>

        {/*navigation */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 bg-white shadow-md rounded-full px-8 py-3 gap-8 text-sm font-medium">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <a href="#about" className={baseNav}>
            About
          </a>
          <NavLink to="/partnerships" className={navLinkClass}>
            Partnerships
          </NavLink>
          <a href="#contact" className={baseNav}>
            Contact
          </a>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-6">
          <NavLink to="/login" className="text-primary-800 text-sm">
            Log in
          </NavLink>

          <NavLink
            to="/signup"
            className="bg-primary-700 text-white px-5 py-2 rounded-full text-sm hover:bg-primary-800 transition"
          >
            Sign Up
          </NavLink>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-primary-700"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden mt-6 flex flex-col gap-4 text-neutral-600">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/partnerships" className={navLinkClass}>
            Partnerships
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
          <NavLink to="/login">Log in</NavLink>
          <NavLink
            to="/signup"
            className="bg-primary-700 text-white px-4 py-2 rounded-md text-center"
          >
            Sign Up
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
