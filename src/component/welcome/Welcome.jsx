import "./welcome.css";
import { RiDownloadCloudFill } from "react-icons/ri";
import { saveAs } from "file-saver";
import { useState } from "react";
// import profileImg from "./image/me1.jpg";
// import pdf from "./image/Anas_Alkhamis.pdf";

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
    { srcText: "/image/CSS.png", alt: "experience of CSS" },
    {
      srcText: "./image/JavaScript.png",

      alt: "experience of JavaScript",
    },
    { srcText: "./image/HTML.png", alt: "experience of HTML" },

    {
      srcText: "./image/MongoDb.png",

      alt: "experience of MongoDb",
    },
    { srcText: "./image/MySQL.png", alt: "experience of MySQL" },
    { srcText: "./image/Node.js.png", alt: "experience of Node.js" },
    {
      srcText: "./image/React.js.png",
      alt: "experience of React.js",
    },
    {
      srcText: "./image/JQuery.png",
      alt: "experience of JQuery",
    },
    {
      srcText: "./image/Socket.io.png",
      alt: "experience of Socket.io",
    },
  ]);
  const saveFile = () => {
    saveAs("./images/Anas_Alkhamis.pdf", "AnasAlkhamis_CV.pdf");
  };

  return (
    <>
      <div className="welcome_box">
        <header className="welcome_header">
          <div className="my_image_box">
            <img className="my_image" src="./images/me1.jpg" alt="profileImg" />
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
