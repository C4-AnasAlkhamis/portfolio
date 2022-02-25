import { Link } from "react-router-dom";

import "./navBar.css";
const NavBar = () => {
  return (
    <>
      <div className="navBar">
        <Link to={"/welcome"}>Welcome</Link>
        <Link to={""}>About</Link>
        <Link to={""}>Contact</Link>
        <Link to={""}>Fun</Link>
      </div>
    </>
  );
};

export default NavBar;
