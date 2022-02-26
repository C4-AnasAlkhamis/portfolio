import { Link, useNavigate } from "react-router-dom";
import { MdOutlineArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

import "./changePage.css";
import { useState } from "react";
function ChangePage() {
  const change = useNavigate();
  const [index, setIndex] = useState(1);
  const [path, setPath] = useState(["/welcome", "/about", "/contact", "/fun"]);

  const nextBack = (input) => {
    if (input === "Forward" && index < 4) {
      change(path[index + 1]);
      setIndex(index + 1);
    }
    if (input === "Back" && index >= 0) {
      change(path[index - 1]);
      setIndex(index - 1);
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
