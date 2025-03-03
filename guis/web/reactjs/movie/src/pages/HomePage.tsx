import ItemsListComponent from "@/components/ItemsListComponent";

const HomePage = () => {
  return (
    <div className="flex flex-col items-start justify-center w-full">
      <ItemsListComponent title="Now playing" />
      <ItemsListComponent title="Popular Movies" />
      <ItemsListComponent title="Upcoming" />
      <ItemsListComponent title="Trending Shows" />
      <ItemsListComponent title="Popular Shows" />
      <ItemsListComponent title="Airing Today" />
    </div>
  );
};

export default HomePage;
