import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const ItemsListComponent = ({ title }: { title: string }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold">{title}</h1>
      <div className="grid grid-cols-5 gap-4">
        {[1, 2, 3, 4, 5].map((item) => (
          <div key={item} className="bg-gray-700 rounded-lg p-4">
            <img
              src="https://via.placeholder.com/150"
              alt={`Item ${item}`}
              className="w-full h-auto rounded-lg"
            />
            <h2 className="text-lg font-semibold mt-2">Item {item}</h2>
            <p className="text-sm">Description of item {item}</p>
          </div>
        ))}
      </div>
      <button className="mt-4 p-2 bg-[#9d9a96ac] font-bold rounded-lg duration-300 ease-in-out hover:bg-white hover:text-black flex flex-row items-center justify-around w-32">
        More
        <MoreHorizIcon />
      </button>
    </div>
  );
};

export default ItemsListComponent;
