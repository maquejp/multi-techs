import { useState, useEffect } from "react";
import appEnv from "@/helpers/env_helper";
import tmdbFetchData, { tmdbFetchDataType } from "@/helpers/tmdb_api_helper";
import logo from "@/assets/logo.png";
import DesktopNavComponent from "./DesktopNavComponent";
import MobileNavComponent from "./MobileNavComponent";
import MovieDetailsComponent from "../MovieDetailsComponent";

const Navbar = () => {
  type MovieDataType = {
    media: string;
    title: string;
    overview: string;
  };

  const [movieData, setMovieData] = useState<MovieDataType>({
    media: "",
    title: "",
    overview: "",
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const fetchMovies = async (context: string) => {
    try {
      const response: tmdbFetchDataType = await tmdbFetchData(context);
      if (response.status === 200) {
        if (response.data) {
          if (response.data.results) {
            const results = response.data.results;
            const randomIndex = Math.floor(Math.random() * results.length);
            setMovieData({
              media: results[randomIndex]?.backdrop_path || "",
              title: results[randomIndex]?.title || "",
              overview: results[randomIndex]?.overview || "",
            });
          }
        } else {
          console.log("no results!");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const currentPage = location.pathname;
    if (currentPage === "/") fetchMovies("movie.popular");
    if (currentPage === "/movies") fetchMovies("movie.popular");
    if (currentPage === "/tv") fetchMovies("tv.popular");
  }, []);

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat h-screen text-white"
      style={{
        backgroundImage: `url(${appEnv.API_IMG_URL}${movieData.media})`,
      }}
    >
      <div className="fixed p-6 left-0 top-0 w-full z-50 bg-gradient-to-b from-black/70 to-transparent">
        <div className="flex justify-between items-center h-24 px-6">
          <img src={logo} alt="logo" className="w-32 lg:w-40 xl:w-48 mt-20" />
          <DesktopNavComponent />
          <button
            className="block md:hidden text-white text-3xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <MobileNavComponent
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
        />
      )}

      {/* Movie Details */}
      {movieData && movieData.title && (
        <MovieDetailsComponent data={movieData} />
      )}
    </div>
  );
};

export default Navbar;
