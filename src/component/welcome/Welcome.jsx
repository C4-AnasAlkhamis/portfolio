import "./welcome.css";
import { RiDownloadCloudFill } from "react-icons/ri";
import { saveAs } from "file-saver";
import { useState } from "react";
import css from "./image/Css.png";
import javascript from "./image/javascript.png";
import React1 from "./image/React.js.png";
import MongoDb from "./image/MongoDb.png";
import Mysql from "./image/Mysql.png";
import Html from "./image/Html.png";
import Node from "./image/Node.js.png";
import me from "./image/me1.jpg";
import pdf from "./image/CV_4.pdf";

import { FaNodeJs, FaReact, FaHtml5 } from "react-icons/fa";
import {
  SiJavascript,
  SiCss3,
  SiMongodb,
  SiMysql,
  SiJquery,
  SiSocketdotio,
} from "react-icons/si";

const Welcome = () => {
  const [imgInfo, setImgInfo] = useState([
    { srcText: "/image/Css.png", src: css, alt: "experience of css" },
    {
      srcText: "./image/javascript.png",
      src: javascript,
      alt: "experience of javascript",
    },
    { srcText: "./image/Html.png", src: Html, alt: "experience of Html" },

    {
      srcText: "./image/MongoDb.png",
      src: MongoDb,
      alt: "experience of MongoDb",
    },
    { srcText: "./image/Mysql.png", src: Mysql, alt: "experience of Mysql" },
    { srcText: "./image/Node.js.png", src: Node, alt: "experience of Node" },
    {
      srcText: "./image/React.js.png",
      src: React1,
      alt: "experience of React",
    },
  ]);
  const saveFile = () => {
    saveAs(pdf, "AnasAlkhamis_CV.pdf");
  };

  return (
    <>
      <div className="welcome_box">
        <header className="welcome_header">
          <div className="my_image">
            <img src={me} alt="" />
          </div>

          <span className="open_tag">{"<header>"}</span>
          <div className="header_box">
            <span className="header_hello">Hello,</span>
            <h1 className="header_name">Anas Al-Khamis</h1>
            <p className="header_info">
              Web developer <span className="backend">Backend</span> |
              <span className="frontend"> Frontend</span>
            </p>
            <span className="header_CV_btn">
              C.V
              <RiDownloadCloudFill onClick={saveFile} />
            </span>
          </div>
          <span className="close_tag">{"</header>"}</span>
        </header>
        <div className="welcome_image_tag">
          <h3>experience</h3>
          <div className="welcome_images_info_tag">
            {imgInfo.map((info, i) => {
              return (
                <div key={i} className="images_box">
                  <span className="tag">{`<`}</span>
                  <span className="tag_img">{`img `}</span>
                  <span className="tag_src">{`src="${info.srcText}"`}</span>
                  <span className="tag_alt">{`alt="${info.alt}"`}</span>
                  <span className="tag">{`/>`}</span>
                </div>
              );
            })}
          </div>
          <div className="welcome_images">
            <div className="image">
              <i>
                <FaHtml5 style={{ color: "#ff8c49" }} />
              </i>
              <i>
                <SiCss3 style={{ color: "#1461b8" }} />
              </i>
              <i>
                <SiJavascript style={{ color: "#f5f251" }} />
              </i>
              <i>
                <FaNodeJs style={{ color: "#51f559" }} />
              </i>
              <i>
                <SiSocketdotio style={{ color: "#cde2ce" }} />
              </i>
              <i>
                <SiMysql style={{ color: "#2661e0" }} />
              </i>
              <i>
                <FaReact style={{ color: "#4d85ff" }} />
              </i>

              <i>
                <SiMongodb style={{ color: "#14b81c" }} />
              </i>

              <i>
                <SiJquery style={{ color: "#9714b8" }} />
              </i>
            </div>

            {/* {imgInfo.map((info, i) => {
              return (
                <div key={i} className="image">
                  <img src={info.src} alt={info.alt} />
                </div>
              );
            })} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
