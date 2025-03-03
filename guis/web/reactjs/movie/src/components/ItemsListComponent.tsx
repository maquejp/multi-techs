import appEnv from "@/helpers/env_helper";
import { tmdbApiReponseResultType } from "@/interfaces/tmdb_interfaces";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const ItemsListComponent = ({
  title,
  list,
}: {
  title: string;
  list: tmdbApiReponseResultType[];
}) => {
  return (
    <div className="m-8">
      <h1 className="text-2xl font-bold pb-4">{title}</h1>
      <div className="grid grid-cols-5 gap-4">
        {list.slice(0, 5).map((item) => (
          <div
            key={item.id}
            className="bg-gray-700 rounded-lg p-4  hover:scale-105 cursor-pointer duration-300 ease-in-out"
          >
            <div className="text-sm rounded-full bg-amber-400 text-black text-center w-1/4 mb-2">
              {item.vote_average.toFixed(1)}
            </div>
            <img
              src={appEnv.API_IMG_URL + item?.poster_path}
              alt={`${item.backdrop_path}`}
              className="w-full h-auto rounded-lg"
            />
            <h2 className="text-lg font-semibold mt-2">
              {" "}
              {item.title ? item.title : item.name}
            </h2>
            <p className="text-sm">
              {item.overview.slice(0, 100)}
              {item.overview.length > 100 ? "..." : ""}
            </p>
          </div>
        ))}
      </div>
      <button className="mt-4 p-2 bg-[#9d9a96ac] font-bold rounded-lg duration-300 ease-in-out hover:bg-white hover:text-black flex flex-row items-center justify-around w-32 cursor-pointer">
        More
        <MoreHorizIcon />
      </button>
    </div>
  );
};

export default ItemsListComponent;
