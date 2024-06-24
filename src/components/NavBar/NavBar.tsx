import { FC } from "react";
import { Link } from "react-router-dom";

import "./NavBar.scss";

const NavBar: FC = () => {
  return (
    <div className="nav-bar-wrapper">
      <img src="src/assets/alucard_icon.jpeg" alt="Alucard icon" />
      <div className="nav-bar-links">
        <Link to={"/"}>Minions</Link>
        <Link to={"/heroes"}>Heroes</Link>
      </div>
    </div>
  );
};

export default NavBar;
