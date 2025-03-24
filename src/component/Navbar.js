import { NavLink } from "react-router-dom";

const Navbar = ({ a, b }) => {
  return (
    <li>
      <NavLink to={b} className={({ isActive }) => (isActive ? "active-link" : "")}>
        {a}
      </NavLink>
    </li>
  );
};

export default Navbar;
