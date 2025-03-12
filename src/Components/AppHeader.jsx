import React, { useState } from "react";
import { BiSolidCameraMovie } from "react-icons/bi";
import { NavLink, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const AppHeader = () => {
  const [value, setValue] = useState("");
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false); // Toggle for mobile menu

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value && query) {
      navigate(`/search/${query}/${value}`);
      setMenuOpen(false); // Close menu on submit (optional)
    } else {
      alert("Please fill all the details !!!");
    }
  };

  return (
    <div className="bg-neutral-800 text-neutral-50 py-7 px-12 relative">
      {/* Header */}
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl flex gap-3 items-center ">
          <BiSolidCameraMovie className="lg:text-4xl text-6xl md:text-3xl"/>
          <h1 className="italic underline">Movies Search App</h1>
        </div>

        {/* Hamburger for mobile */}
        <div className="lg:hidden text-3xl cursor-pointer pl-4" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
        </div>

        {/* Navbar & Form - large screens */}
        <div className="hidden lg:flex gap-10 items-center">
          {/* Nav Links */}
          <ul className="flex gap-5 text-lg">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-neutral-300 shadow-xl text-neutral-300"
                    : "hover:text-neutral-300"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-neutral-300 shadow-xl text-neutral-300"
                    : "hover:text-neutral-300"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-neutral-300 shadow-xl text-neutral-300"
                    : "hover:text-neutral-300"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Search Form */}
          <form
            className="flex gap-3 text-neutral-800"
            onSubmit={handleSubmit}
          >
            <input
              name="name"
              type="text"
              value={query}
              placeholder="Search..."
              required
              onChange={(e) => setQuery(e.target.value)}
              className="rounded-xl px-3 py-2"
            />
            <select
              className="px-3 py-2 rounded-lg"
              name="type"
              required
              value={value}
              onChange={(e) => setValue(e.target.value)}
            >
              <option value="" disabled>
                Choose..
              </option>
              <option value="movie">Movie</option>
              <option value="series">Series</option>
            </select>
            <button
              type="submit"
              className="hover:bg-neutral-50 hover:text-neutral-800 px-3 py-2 rounded-2xl border-2 border-neutral-50 text-neutral-50 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Mobile Menu (for sm and md) */}
      {menuOpen && (
        <div className="lg:hidden mt-4 flex flex-col gap-4 items-center bg-neutral-700 py-4 rounded-xl shadow-xl">
          {/* Nav Links */}
          <ul className="flex flex-col gap-3 text-lg items-center">
            <li>
              <NavLink
                to="/"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-neutral-300 shadow-xl text-neutral-300"
                    : "hover:text-neutral-300"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-neutral-300 shadow-xl text-neutral-300"
                    : "hover:text-neutral-300"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-neutral-300 shadow-xl text-neutral-300"
                    : "hover:text-neutral-300"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Search Form */}
          <form
            className="flex flex-col gap-3 w-11/12 text-neutral-800"
            onSubmit={handleSubmit}
          >
            <input
              name="name"
              type="text"
              value={query}
              placeholder="Search..."
              required
              onChange={(e) => setQuery(e.target.value)}
              className="rounded-xl px-3 py-2"
            />
            <select
              className="px-3 py-2 rounded-lg"
              name="type"
              required
              value={value}
              onChange={(e) => setValue(e.target.value)}
            >
              <option value="" disabled>
                Choose..
              </option>
              <option value="movie">Movie</option>
              <option value="series">Series</option>
            </select>
            <button
              type="submit"
              className="hover:bg-neutral-50 hover:text-neutral-800 px-3 py-2 rounded-2xl border-2 border-neutral-50 text-neutral-50 transition"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AppHeader;
