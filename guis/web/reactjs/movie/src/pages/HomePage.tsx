import ItemsListComponent from "@/components/ItemsListComponent";
import tmdbFetchData, { TmdbContext } from "@/helpers/tmdb_api_helper";
import {
  tmdbApiReponseResultType,
  tmdbFetchMovieType,
} from "@/interfaces/tmdb_interfaces";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [nowPlayingMovie, setNowPlayingMovie] = useState<
    tmdbApiReponseResultType[]
  >([]);
  const [popularsMovie, setPopularsMovie] = useState<
    tmdbApiReponseResultType[]
  >([]);
  const [upcomingMovie, setUpcomingMovie] = useState<
    tmdbApiReponseResultType[]
  >([]);
  const [trendingShow, setTrendingShow] = useState<tmdbApiReponseResultType[]>(
    []
  );
  const [popularsShow, setPopularsShow] = useState<tmdbApiReponseResultType[]>(
    []
  );
  const [tvAiringToday, setTvAiringToday] = useState<
    tmdbApiReponseResultType[]
  >([]);

  const getNowPlayingMovie = async () => {
    const response: tmdbFetchMovieType = await tmdbFetchData(
      TmdbContext.MovieNowPlaying
    );
    setNowPlayingMovie(response.data?.results || []);
  };

  const getPopularsMovies = async () => {
    const response: tmdbFetchMovieType = await tmdbFetchData(
      TmdbContext.MoviePopular
    );
    setPopularsMovie(response.data?.results || []);
  };

  const getUpcomingMovie = async () => {
    const response: tmdbFetchMovieType = await tmdbFetchData(
      TmdbContext.MovieUpcoming
    );
    setUpcomingMovie(response.data?.results || []);
  };

  const getTrendingShows = async () => {
    const response: tmdbFetchMovieType = await tmdbFetchData(
      TmdbContext.TvTrendingWeek
    );
    setTrendingShow(response.data?.results || []);
  };

  const getPopularsShows = async () => {
    const response: tmdbFetchMovieType = await tmdbFetchData(
      TmdbContext.TvPopular
    );
    setPopularsShow(response.data?.results || []);
  };

  const getTvAiringToday = async () => {
    const response: tmdbFetchMovieType = await tmdbFetchData(
      TmdbContext.TvAiringToday
    );
    setTvAiringToday(response.data?.results || []);
  };

  useEffect(() => {
    getNowPlayingMovie();
    getPopularsMovies();
    getUpcomingMovie();
    getTrendingShows();
    getPopularsShows();
    getTvAiringToday();
  }, []);

  return (
    <div className="flex flex-col items-start justify-center w-full">
      <ItemsListComponent title="Now playing" list={nowPlayingMovie} />
      <ItemsListComponent title="Popular Movies" list={popularsMovie} />
      <ItemsListComponent title="Upcoming" list={upcomingMovie} />
      <ItemsListComponent title="Trending Shows" list={trendingShow} />
      <ItemsListComponent title="Popular Shows" list={popularsShow} />
      <ItemsListComponent title="Airing Today" list={tvAiringToday} />
    </div>
  );
};

export default HomePage;
