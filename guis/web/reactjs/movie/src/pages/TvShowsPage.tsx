import ItemsListComponent from "@/components/ItemsListComponent";
import { TmdbContext } from "@/helpers/tmdb_api_helper";

const TvShowsPages = () => {
  return (
    <div className="flex flex-col items-start justify-center w-full">
      <ItemsListComponent
        title="Trending Shows"
        tbdContext={TmdbContext.TvTrendingWeek}
      />
      <ItemsListComponent
        title="Popular Shows"
        tbdContext={TmdbContext.TvPopular}
        nbItems={10}
      />
      <ItemsListComponent
        title="Airing Today"
        tbdContext={TmdbContext.TvAiringToday}
      />
    </div>
  );
};

export default TvShowsPages;
