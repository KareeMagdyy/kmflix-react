import React, { useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { doc, onSnapshot } from "firebase/firestore";
import unavailable from "../assets/image-unavailable.jpg";
import { Link } from "react-router-dom";

const SavedShows = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedShows);
    });
  }, [user?.email]);

  return (
    <>
      <h2 className='text-white text-xl font-bold p-4 md:text-xl'>My Shows</h2>
      <div className='relative flex items-center group'>
        <MdChevronLeft
          onClick={slideLeft}
          size={40}
          className='absolute left-1 bg-white rounded-full opacity-40 hover:opacity-100 z-[15] cursor-pointer hidden group-hover:block'
        />
        <div
          id={`slider`}
          className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'
        >
          {movies.map((movie, id) => (
            <div
              key={id}
              className='w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 hover:scale-110 transition-all hover:z-[5]  '
            >
              <Link to={`/movie/${movie.id}`}>
                <img
                  className='w-full h-auto block'
                  src={
                    movie.backdrop_path !== null
                      ? `https://image.tmdb.org/t/p/w500${movie.img}`
                      : unavailable
                  }
                  alt={movie.title || movie.name}
                />
                <div className='absolute inset-2 hover:bg-black/80 text-white opacity-0  hover:opacity-100 transition-all'>
                  <p className='flex items-center justify-center font-bold whitespace-normal text-xs md:text-sm text-center h-full'>
                    {movie.title || movie.name}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          size={40}
          className='absolute right-1 bg-white rounded-full ml-2 opacity-40 hover:opacity-100 z-[15]  cursor-pointer hidden group-hover:block'
        />
      </div>
    </>
  );
};

export default SavedShows;
