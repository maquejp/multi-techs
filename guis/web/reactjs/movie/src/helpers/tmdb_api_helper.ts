import axios from "axios";
import appEnv from "@/helpers/env_helper";
import {
  tmdbMovieResponseType,
  tmdbFetchMovieType,
} from "@/interfaces/tmdb_interfaces";

const BASE_URL = appEnv.API_URL;
const API_KEY = appEnv.API_KEY;

// Define types for our API URIs structure
type EndpointFunction = () => string;

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
  popular: EndpointFunction;
  upcoming: EndpointFunction;
  topRated: EndpointFunction;
  nowPlaying: EndpointFunction;
}

// Define types for our API URIs structure: TV
interface TvEndpoints {
  popular: EndpointFunction;
  trendingWeek: EndpointFunction;
  topRated: EndpointFunction;
  airingToday: EndpointFunction;
}

// Define types for our API URIs structure
interface TmdbApiUris {
  movie: MovieEndpoints;
  tv: TvEndpoints;
}

type Category = keyof TmdbApiUris;

const urlSearchParamsApiKey = new URLSearchParams({ api_key: API_KEY });

// Define our API URIs
const tmdbApiUris: TmdbApiUris = {
  movie: {
    popular: (): string => `${BASE_URL}/movie/popular?${urlSearchParamsApiKey}`,
    upcoming: (): string =>
      `${BASE_URL}/movie/upcoming?${urlSearchParamsApiKey}`,
    topRated: (): string =>
      `${BASE_URL}/movie/top_rated?${urlSearchParamsApiKey}`,
    nowPlaying: (): string =>
      `${BASE_URL}/movie/now_playing?${urlSearchParamsApiKey}`,
  },
  tv: {
    popular: (): string => `${BASE_URL}/tv/popular?${urlSearchParamsApiKey}`,
    trendingWeek: (): string =>
      `${BASE_URL}/trending/tv/week?${urlSearchParamsApiKey}`,
    topRated: (): string => `${BASE_URL}/tv/top_rated?${urlSearchParamsApiKey}`,
    airingToday: (): string =>
      `${BASE_URL}/tv/airing_today?${urlSearchParamsApiKey}`,
  },
};

/**
 * Get TMDB API URL using dot notation context
 * @param context - Context in dot notation format, e.g. 'movie.popular'
 * @returns The URL string for the specified API endpoint
 */
export const tmdbGetApiUrl = (context: string): string => {
  const segments = context.split(".");
  if (segments.length !== 2) {
    throw new Error(
      'Context should be in format "category.endpoint", e.g. "movie.popular"'
    );
  }

  const [categoryStr, endpointStr] = segments;

  // Type validation for category
  const category = categoryStr as Category;

  // Ensure the category exists in tmdbApiUris
  const categoryEndpoints = tmdbApiUris[category];

  // Ensure the endpoint exists for the given category
  if (!(endpointStr in categoryEndpoints)) {
    throw new Error(
      `Endpoint "${endpointStr}" not found in category "${categoryStr}"`
    );
  }

  // Access the function directly
  return categoryEndpoints[endpointStr as keyof typeof categoryEndpoints]();
};

/**
 * Get data from the TMDB API
 * @param context - Context in dot notation format, e.g. 'movie.popular'
 * @returns Data from the TMDB API
 */
export const tmdbFetchData = async (
  context: TmdbContext
): Promise<tmdbFetchMovieType> => {
  try {
    const apiUrl = tmdbGetApiUrl(context);
    const response = await axios.get<tmdbMovieResponseType>(apiUrl);
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
