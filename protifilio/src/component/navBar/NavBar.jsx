import { Link} from "react-router-dom";

import "./navBar.css";
const NavBar = () => {
  return (
    <>
      <div className="navBar">
        <Link to={"/welcome"}>Welcome</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/fun"}>Fun</Link>
      </div>
    </>
  );
};

export default NavBar;
