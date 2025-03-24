import { NavLink } from "react-router-dom";
import "./Header.css";
import Navbar from "../component/Navbar";

const Header = () => {
  return (
    <div className="header">
      <NavLink to="/home">
        <img 
          src="https://svgsilh.com/svg/2085075.svg" 
          alt="Company Logo" 
          height="50px" 
          width="50px"
        />
      </NavLink>

      <ul className="nav-links">
        <Navbar a="Home" b="/home"></Navbar>
        <Navbar a="Search" b="/search"></Navbar>
        <Navbar a="Cart" b="/cart"></Navbar>
        <Navbar a="Help" b="/help"></Navbar>
      </ul>
    </div>
  );
};

export default Header;
