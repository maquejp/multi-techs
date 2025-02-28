import { NavLink } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import SearchBarComponent from "./SearchBarComponent";

type MobileNavProps = {
  isOpen: boolean;
  onClose: () => void;
};

const MobileNavComponent = ({ isOpen, onClose }: MobileNavProps) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-64 bg-black bg-opacity-90 text-white z-50 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <button onClick={onClose} className="absolute top-4 right-4 text-3xl">
        <CloseIcon />
      </button>
      <div className="flex flex-col items-center justify-center h-full space-y-6">
        <NavLink
          to="/"
          className="text-2xl font-bold hover:text-orange-600"
          onClick={onClose}
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          className="text-2xl font-bold hover:text-orange-600"
          onClick={onClose}
        >
          Movies
        </NavLink>
        <NavLink
          to="/tv"
          className="text-2xl font-bold hover:text-orange-600"
          onClick={onClose}
        >
          TV Shows
        </NavLink>
        <SearchBarComponent />
      </div>
    </div>
  );
};

export default MobileNavComponent;
