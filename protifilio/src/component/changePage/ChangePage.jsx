import { Link } from "react-router-dom";
import { MdOutlineArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

import "./changePage.css";
function ChangePage() {
  return (
    <>
      <div className="change_page">
        <i>
          <MdArrowForwardIos />
        </i>
        <i>
          <MdOutlineArrowBackIosNew />
        </i>
      </div>
    </>
  );
}

export default ChangePage;
