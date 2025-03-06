import ItemsListComponent from "@/components/ItemsListComponent";
import { TmdbContext } from "@/helpers/tmdb_api_helper";

const HomePage = () => {
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
      <ItemsListComponent
        title="Trending Shows"
        tbdContext={TmdbContext.TvTrendingWeek}
      />
      <ItemsListComponent
        title="Popular Shows"
        tbdContext={TmdbContext.TvPopular}
      />
      <ItemsListComponent
        title="Airing Today"
        tbdContext={TmdbContext.TvAiringToday}
      />
    </div>
  );
};

export default HomePage;
