import axios from "axios";
import appEnv from "@/helpers/env_helper";
import {
  tmdbMovieResponseType,
  tmdbFetchMovieType,
} from "@/interfaces/tmdb_interfaces";

const BASE_URL = appEnv.API_URL;
// const API_KEY = appEnv.API_KEY;
const API_READ_ACCESS_KEY = appEnv.API_READ_ACCESS_KEY;

export enum TmdbContext {
  MoviePopular = "movie.popular",
  MovieUpcoming = "movie.upcoming",
  MovieTopRated = "movie.topRated",
  MovieNowPlaying = "movie.nowPlaying",
  TvPopular = "tv.popular",
  TvTrendingWeek = "tv.trendingWeek",
  TvTopRated = "tv.topRated",
  TvAiringToday = "tv.airingToday",
}

// Define types for our API URIs structure: Movie
interface MovieEndpoints {
  popular: string;
  upcoming: string;
  topRated: string;
  nowPlaying: string;
}

// Define types for our API URIs structure: TV
interface TvEndpoints {
  popular: string;
  trendingWeek: string;
  topRated: string;
  airingToday: string;
}

interface TmdbApiUris {
  movie: MovieEndpoints;
  tv: TvEndpoints;
}

const tmdbApiUris: TmdbApiUris = {
  movie: {
    popular: `${BASE_URL}/movie/popular`,
    upcoming: `${BASE_URL}/movie/upcoming`,
    topRated: `${BASE_URL}/movie/top_rated`,
    nowPlaying: `${BASE_URL}/movie/now_playing`,
  },
  tv: {
    popular: `${BASE_URL}/tv/popular`,
    trendingWeek: `${BASE_URL}/trending/tv/week`,
    topRated: `${BASE_URL}/tv/top_rated`,
    airingToday: `${BASE_URL}/tv/airing_today`,
  },
};

export const tmdbGetApiUrl = (context: string): string => {
  const segments = context.split(".");
  if (segments.length !== 2) {
    throw new Error(
      'Context should be in format "category.endpoint", e.g. "movie.popular"'
    );
  }

  const [categoryStr, endpointStr] = segments;
  const category = categoryStr as keyof TmdbApiUris;
  const categoryEndpoints = tmdbApiUris[category];

  if (!(endpointStr in categoryEndpoints)) {
    throw new Error(
      `Endpoint "${endpointStr}" not found in category "${categoryStr}"`
    );
  }

  return categoryEndpoints[endpointStr as keyof typeof categoryEndpoints];
};

export const tmdbFetchData = async (
  context: TmdbContext
): Promise<tmdbFetchMovieType> => {
  try {
    const apiUrl = tmdbGetApiUrl(context);
    const response = await axios.get<tmdbMovieResponseType>(apiUrl, {
      headers: {
        Authorization: `Bearer ${API_READ_ACCESS_KEY}`,
        Accept: "application/json",
      },
    });

    if (response.status !== 200) {
      return { message: "Error", status: response.status };
    }
    if (!response.data) {
      return { message: "Error: No data", status: 500 };
    }
    if (!response.data.results) {
      return { message: "Error: No results", status: 500 };
    }
    return { message: "Success", status: 200, data: response.data };
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return { message: "Error", status: error.response.status };
    }
    return { message: "Error", status: 500 };
  }
};

export default tmdbFetchData;
