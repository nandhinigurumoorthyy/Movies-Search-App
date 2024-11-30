import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Load from "./Load";

const SeeMore = () => {
  const [details, setDetils] = useState([]);
  const { imdbID } = useParams();

  useEffect(() => {
    const fetchDetails = async () => {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?i=${imdbID}&apikey=459f1f91`
      );
      console.log(data);
      setDetils(data);
    };
    fetchDetails();
  }, [imdbID]);

  return (
    <div className="h-screen bg-neutral-700 text-neutral-50 text-xl">
      {details ? (
        <div className="flex p-10 gap-10">
          <div>
            <img src={details.Poster} className="w-full h-96" />
          </div>
          <div className="w-5/6 flex flex-col gap-3">
            <h1 className="font-semibold text-3xl">
              {details.Title}{" "}
              <span className="text-neutral-300 text-xl">
                {"("}
                {details.Released}
                {")"}
              </span>
            </h1>
            <p className="text-neutral-400">{details.Type}</p>
            <p className="italic text-neutral-300">{details.Actors}</p>
            <p className="flex-wrap">{details.Plot}</p>
            <p>
              <span className="font-semibold text-neutral-300">Genre:</span>{" "}
              <span className="text-neutral-50">{details.Genre}</span>
            </p>
            <p>
              <span className="font-semibold text-neutral-300">Director:</span>{" "}
              <span className="text-neutral-50">{details.Director}</span>
            </p>
            <p>
              <span className="font-semibold text-neutral-300">Writer: </span>
              <span className="text-neutral-50">{details.Writer}</span>
            </p>
            <p>
              <span className="font-semibold text-neutral-300">Language: </span>
              <span className="text-neutral-50">{details.Language}</span>
            </p>
            <p>
              <span className="font-semibold text-neutral-300">Awards: </span>
              <span className="text-neutral-50">{details.Awards}</span>
            </p>
            <p>
              <span className="font-semibold text-neutral-300">imdbID: </span>
              <span className="text-neutral-50">{details.imdbID}</span>
            </p>
            <p>
              <span className="font-semibold text-neutral-300">
                imdbRating:{" "}
              </span>
              {details.imdbRating}
            </p>
            <div>
              <p className="font-semibold text-neutral-300">Ratings:</p>
              <ul>
                {details.Ratings && details.Ratings.length > 0 ? (
                  details.Ratings.map((element, index) => (
                    <li key={index} className="pl-10 pt-2">
                      <span className="font-semibold text-neutral-300">
                        {element.Source}:{" "}
                      </span>
                      <span>{element.Value}</span>
                    </li>
                  ))
                ) : (
                  <span>No ratings</span>
                )}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <Load />
      )}
    </div>
  );
};

export default SeeMore;
