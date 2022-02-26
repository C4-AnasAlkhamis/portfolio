import { Link, useNavigate } from "react-router-dom";
import { MdOutlineArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import "./changePage.css";
import { useState, useContext, useEffect } from "react";
import { LinkContext } from "../../App";
function ChangePage() {
  const change = useNavigate();
  const [path, setPath] = useState(["/welcome", "/about", "/contact", "/fun"]);
  const paginate = useContext(LinkContext);

  const nextBack = async (input) => {
    if (input === "Forward" && paginate.links < 3) {
      await paginate.setLinks(paginate.links + 1);

      change(path[paginate.links + 1]);
    } else if (input === "Back" && paginate.links > 0) {
      await paginate.setLinks(paginate.links - 1);

      change(path[paginate.links - 1]);
    }
  };

  return (
    <>
      <div className="change_page">
        <i>
          <MdArrowForwardIos
            onClick={() => {
              nextBack("Forward");
            }}
          />
        </i>
        <i>
          <MdOutlineArrowBackIosNew
            onClick={() => {
              nextBack("Back");
            }}
          />
        </i>
      </div>
    </>
  );
}

export default ChangePage;
