import React, { useState } from "react";
import { BiSolidCameraMovie } from "react-icons/bi";
import { NavLink, useNavigate } from "react-router-dom";

const AppHeader = () => {
  const [value, setValue] = useState("");
  const [query, setQuery] = useState("");

  const navigate = useNavigate();
  const handleSubmit = () => {
    if (value && query) {
      navigate(`/search/${query}/${value}`);
    } else {
      alert("Please fill all the details !!!");
    }
  };
  return (
    <div className="bg-neutral-800 text-neutral-50 h-24 flex justify-around items-center">
      <div className="text-3xl flex gap-3">
        <BiSolidCameraMovie />
        <h1 className=" italic underline">Movies Search App</h1>
      </div>
      <div>
        <ul className="flex gap-7 text-xl">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => {
                return isActive ? "underline shadow-xl text-neutral-300" : "";
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => {
                return isActive ? "underline shadow-xl text-neutral-300" : "";
              }}
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
      <form className="text-neutral-800 flex gap-6">
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
          className="hover:bg-neutral-50 hover:text-neutral-800 px-3 py-2 rounded-2xl border-2 border-neutral-50 text-neutral-50"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AppHeader;
