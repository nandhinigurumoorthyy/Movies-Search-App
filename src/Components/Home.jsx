import React from "react";
import about from "../images/about.jpg";
const Home = () => {
  return (
    <div className="bg-neutral-700 text-neutral-50 justify-around h-screen items-center flex flex-col">
      <h1 className="text-neutral-500 text-xl font-bold p-3">
        Search for a movie or series by entering its title and choosing a
        type....
      </h1>
      <img src={about} className="w-5/6 h-5/6" />
    </div>
  );
};

export default Home;
