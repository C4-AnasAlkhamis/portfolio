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
          style={{
            borderBottom: `${
              paginate.links === 0 ? "2px solid #d0cdcd" : "none"
            }`,
          }}
          to={"/welcome"}
        >
          Welcome
        </Link>
        <Link
          onClick={() => {
            paginate.setLinks(1);
          }}
          style={{
            borderBottom: `${
              paginate.links === 1 ? "2px solid #d0cdcd" : "none"
            }`,
          }}
          to={"/about"}
        >
          About
        </Link>
        <Link
          onClick={() => {
            paginate.setLinks(2);
          }}
          style={{
            borderBottom: `${
              paginate.links === 2 ? "2px solid #d0cdcd" : "none"
            }`,
          }}
          to={"/contact"}
        >
          Contact
        </Link>
        <Link
          onClick={() => {
            paginate.setLinks(3);
          }}
          style={{
            borderBottom: `${
              paginate.links === 3 ? "2px solid #d0cdcd" : "none"
            }`,
          }}
          to={"/fun"}
        >
          Fun
        </Link>
      </div>
    </>
  );
};

export default NavBar;
