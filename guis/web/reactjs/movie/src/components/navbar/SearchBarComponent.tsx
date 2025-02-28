const SearchBarComponent = () => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search"
        className="border-none outline-none p-2 px-4 w-44 lg:w-96 bg-[#f8f8f837] rounded-full text-white placeholder-neutral-300"
      />
      <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
        🔍
      </span>
    </div>
  );
};

export default SearchBarComponent;
