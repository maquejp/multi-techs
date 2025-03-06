import ItemsListComponent from "@/components/ItemsListComponent";
import { TmdbContext } from "@/helpers/tmdb_api_helper";

const MoviesPage = () => {
  return (
    <div className="flex flex-col items-start justify-center w-full">
      <ItemsListComponent
        title="Now playing Movie"
        tbdContext={TmdbContext.MovieNowPlaying}
      />
      <ItemsListComponent
        title="Popular Movies"
        tbdContext={TmdbContext.MoviePopular}
      />
      <ItemsListComponent
        title="Upcoming Movie"
        tbdContext={TmdbContext.MovieUpcoming}
      />
    </div>
  );
};

export default MoviesPage;
