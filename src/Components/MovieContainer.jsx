import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Load from "./Load";

const MovieContainer = () => {
  const [film, setFilm] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // 4 columns x 2 rows
  const { query, value } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getDetails = async () => {
      try {
        const { data } = await axios.get(
          `https://www.omdbapi.com/?s=${query}&type=${value}&apikey=459f1f91`
        );
        setFilm(data.Search || []);
      } catch (error) {
        alert("Query not found!");
        console.error(error);
      }
    };
    getDetails();
  }, [query, value]);

  const totalPages = Math.ceil(film.length / itemsPerPage);

  const getCurrentPageData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return film.slice(startIndex, endIndex);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {film && film.length > 0 ? (
        <>
          <div className="grid grid-cols-4 gap-8 p-14">
            {getCurrentPageData().map((films) => (
              <div
                key={films.imdbID}
                className="w-72 min-h-full shadow-xl pb-4 flex flex-col gap-1"
              >
                <div className="flex justify-center">
                  <img
                    src={films.Poster}
                    className="w-56 h-52"
                    alt={films.Title}
                  />
                </div>
                <p className="flex-wrap font-semibold text-xl pl-3">
                  {films.Title}
                </p>
                <p className="text-neutral-600 pl-3">{films.Type}</p>
                <p className="pl-3">{films.Year}</p>
                <p className="pl-3">imdbID: {films.imdbID}</p>
                <div className="items-center justify-center flex">
                  <button
                    type="button"
                    onClick={() =>
                      navigate(`/search/${query}/${value}/${films.imdbID}`)
                    }
                    className="border-2 border-neutral-700 text-neutral-700 rounded-xl px-2 hover:bg-neutral-700 hover:text-white mt-2 py-1"
                  >
                    See More
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* Pagination */}
          <div className="flex justify-center items-center gap-4 py-6">
            <button
              className={`px-4 py-2 rounded-lg border ${
                currentPage === 1
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-neutral-700 text-white hover:bg-neutral-500"
              }`}
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
            >
              Previous
            </button>
            <div>
              Page {currentPage} of {totalPages}
            </div>
            <button
              className={`px-4 py-2 rounded-lg border ${
                currentPage === totalPages
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-neutral-700 text-white hover:bg-neutral-500"
              }`}
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <div className="flex-grow flex items-center justify-center">
          <Load />
        </div>
      )}
    </div>
  );
};

export default MovieContainer;
