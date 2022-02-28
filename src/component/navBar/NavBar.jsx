import { useContext } from "react";
import { Link } from "react-router-dom";
import { LinkContext } from "../../App";

import "./navBar.css";
const NavBar = () => {
  const paginate = useContext(LinkContext);
  return (
    <>
      <div className="navBar">
        <Link
          onClick={() => {
            paginate.setLinks(0);
          }}
          to={"/welcome"}
        >
          <span className={paginate.links === 0 ? "active" : "disable"}>
            {"<li>"}
          </span>
          <span className={paginate.links !== 0 ? "active_link" : null}>
            Welcome
          </span>

          <span className={paginate.links === 0 ? "active" : "disable"}>
            {"</li>"}
          </span>
        </Link>
        <Link
          onClick={() => {
            paginate.setLinks(1);
          }}
          to={"/about"}
        >
          <span className={paginate.links === 1 ? "active" : "disable"}>
            {"<li>"}
          </span>
          <span className={paginate.links !== 1 ? "active_link" : null}>
            About
          </span>
          <span className={paginate.links === 1 ? "active" : "disable"}>
            {"</li>"}
          </span>
        </Link>
        <Link
          onClick={() => {
            paginate.setLinks(2);
          }}
          to={"/contact"}
        >
          <span className={paginate.links === 2 ? "active" : "disable"}>
            {"<li>"}
          </span>
          <span className={paginate.links !== 2 ? "active_link" : null}>
            Contact
          </span>

          <span className={paginate.links === 2 ? "active" : "disable"}>
            {"</li>"}
          </span>
        </Link>
        <Link
          onClick={() => {
            paginate.setLinks(3);
          }}
          to={"/fun"}
        >
          <span className={paginate.links === 3 ? "active" : "disable"}>
            {"<li>"}
          </span>
          <span className={paginate.links !== 3 ? "active_link" : null}>
            Fun
          </span>

          <span className={paginate.links === 3 ? "active" : "disable"}>
            {"</li>"}
          </span>
        </Link>
        <h2 className="portfolio_name">Anas Alkhamis</h2>
      </div>
    </>
  );
};

export default NavBar;
