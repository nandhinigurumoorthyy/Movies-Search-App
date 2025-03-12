import React from "react";
import poster from "../images/poster.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-neutral-700 text-neutral-50 flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-5xl w-full text-center space-y-6">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold underline decoration-neutral-500 mb-4">
          About Movie Search App
        </h1>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
          Welcome to the{" "}
          <span className="font-bold text-neutral-300">Movie Search App</span>,
          your go-to platform for exploring movies and series!
        </p>

        <p className="text-base sm:text-lg md:text-xl leading-relaxed">Key Features of the App:</p>
        <ul className="list-disc list-inside text-left text-neutral-300 mx-auto max-w-md sm:max-w-lg md:max-w-xl space-y-2">
          <li>Search movies and series by title or keyword.</li>
          <li>Filter results by type (movie or series).</li>
          <li>
            View detailed information, including plot, genre, cast, and ratings.
          </li>
          <li>
            Navigate seamlessly between search results and detailed views.
          </li>
        </ul>

        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
          We hope you enjoy using our app...
        </p>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed">Happy browsing!</p>

        <div className="flex justify-center pt-6">
          <img
            src={poster}
            alt="Poster"
            className="rounded-lg shadow-xl w-60 h-52 sm:w-72 sm:h-64 md:w-80 md:h-72 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
