import "./welcome.css";
import { RiDownloadCloudFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { saveAs } from "file-saver";
import { useState } from "react";
import css from "./image/Css.png";
import javascript from "./image/javascript.png";
import React1 from "./image/React.js.png";
import MongoDb from "./image/MongoDb.png";
import Mysql from "./image/Mysql.png";
import Html from "./image/Html.png";
import Node from "./image/Node.js.png";
import pdf from "./image/CV_4.pdf";

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
  // function sayHello() {
  //   var blob = new Blob(["Hello, world!"], {
  //     type: "text/plain;charset=utf-8",
  //   });
  //   FileSaver.saveAs(blob, "hello world.txt");
  // }
  const path = useNavigate();
  const saveFile = () => {
    const blob = new Blob([pdf], {
      type: "text/plain;charset=utf-8",
    });
    saveAs(pdf, "AnasAlkhamis_CV.pdf");
  };

  return (
    <>
      <div className="welcome_box">
        <header className="welcome_header">
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
            {imgInfo.map((info, i) => {
              return (
                <div key={i} className="image">
                  <img src={info.src} alt={info.alt} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
