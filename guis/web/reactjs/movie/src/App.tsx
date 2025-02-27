import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBarComponent from "./components/NavBar";
import HomePage from "./pages/Home";
import MoviesPage from "./pages/Movies";
import TvShowsPages from "./pages/TvShows";

function App() {
  return (
    <div>
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/tv-shows" element={<TvShowsPages />} />
      </Routes>
    </div>
  );
}

export default App;
