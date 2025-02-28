import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBarComponent from "./components/navbar/NavBarComponent";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import TvShowsPages from "./pages/TvShowsPage";

function App() {
  return (
    <div>
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/tv" element={<TvShowsPages />} />
      </Routes>
    </div>
  );
}

export default App;
