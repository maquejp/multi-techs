export interface tmdbApiReponseResultType {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  origin_country?: string[]; //TV
  original_name?: string; //TV
  first_air_date?: string; //TV
  name?: string; //TV
}

export interface tmdbMovieResponseType {
  page: number;
  results: tmdbApiReponseResultType[];
  total_pages: number;
  total_results: number;
}

export interface tmdbFetchMovieType {
  message: string;
  status: number;
  data?: tmdbMovieResponseType | null;
}
