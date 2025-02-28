import { NavLink } from "react-router-dom";
import SearchBarComponent from "./SearchBarComponent";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const DesktopNavComponent = () => {
  return (
    <div className="hidden md:flex items-center space-x-10 text-xl font-bold text-gray-300">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `hover:text-orange-600 ${isActive ? "text-orange-600 scale-125" : ""}`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={({ isActive }) =>
          `hover:text-orange-600 ${isActive ? "text-orange-600 scale-125" : ""}`
        }
      >
        Movies
      </NavLink>
      <NavLink
        to="/tv"
        className={({ isActive }) =>
          `hover:text-orange-600 ${isActive ? "text-orange-600 scale-125" : ""}`
        }
      >
        TV Shows
      </NavLink>
      <SearchBarComponent />
      <AccountCircleIcon className="cursor-pointer hover:scale-125 hover:rotate-90" />
    </div>
  );
};

export default DesktopNavComponent;
