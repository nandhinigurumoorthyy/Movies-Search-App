import React from "react";
import poster from "../images/poster.jpg";

const About = () => {
  return (
    <div className="h-screen pb-40 bg-neutral-700 text-neutral-50 flex flex-col items-center justify-center pt-40">
      <div className="max-w-4xl text-center space-y-6">
        <h1 className="text-2xl font-semibold underline decoration-neutral-500 mb-4">
          About Movie Search App
        </h1>
        <p className="text-lg">
          Welcome to the{" "}
          <span className="font-bold text-neutral-300">Movie Search App</span>,
          your go-to platform for exploring movies and series!
        </p>

        <p className="text-lg">Key Features of the App:</p>
        <ul className="list-disc list-inside text-left text-neutral-300">
          <li>Search movies and series by title or keyword.</li>
          <li>Filter results by type (movie or series).</li>
          <li>
            View detailed information, including plot, genre, cast, and ratings.
          </li>
          <li>
            Navigate seamlessly between search results and detailed views.
          </li>
        </ul>

        <p className="text-lg">We hope you enjoy using our app ....</p>
        <p className="text-lg">Happy browsing!</p>
        <div className="flex justify-center">
          {" "}
          <img src={poster} className="w-80 h-72 " />
        </div>
      </div>
    </div>
  );
};

export default About;
