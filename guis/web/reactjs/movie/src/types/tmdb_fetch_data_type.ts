import { tmdbReponseResultType } from "./tmdb_response_result_type";

export type tmdbFetchDataType = {
  message: string;
  status: number;
  data?: {
    page: number;
    results: tmdbReponseResultType[];
    total_pages: number;
    total_results: number;
  };
};
