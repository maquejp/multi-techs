import { tmdbApiReponseResultType } from "@/interfaces/tmdb_interfaces";
import InfoIcon from "@mui/icons-material/Info";

const MovieHeroDetailsComponent = ({
  data,
}: {
  data: tmdbApiReponseResultType;
}) => {
  return (
    <div className="absolute inset-0 flex flex-col items-start justify-center text-left px-8 bg-black/50">
      <h1 className="text-5xl font-bold mb-4 space tracking-wide">
        {data.title}
      </h1>
      <p className="text-xl max-w-3xl">{data.overview}</p>
      <button className="mt-4 p-2 bg-[#9d9a96ac] font-bold rounded-lg duration-300 ease-in-out hover:bg-white hover:text-black flex flex-row-reverse items-center justify-around w-32 cursor-pointer">
        More info
        <InfoIcon />
      </button>
    </div>
  );
};

export default MovieHeroDetailsComponent;
