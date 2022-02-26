import "./welcome.css";
import { RiDownloadCloudFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { saveAs } from "file-saver";
import { useState } from "react";
const Welcome = () => {
  const [imgInfo, setImgInfo] = useState([
    { src: "./image/javascript.js", alt: "experience of javascript" },
    { src: "./image/Node.js", alt: "experience of Node.js" },
    { src: "./image/React.js", alt: "experience of React.js" },
    { src: "./image/MongoDb", alt: "experience of MongoDb" },
    { src: "./image/Mysql", alt: "experience of Mysql" },
    { src: "./image/Css", alt: "experience of Css" },
    { src: "./image/Html", alt: "experience of HTML" },
  ]);
  const path = useNavigate();
  const saveFile = () => {
    saveAs(
      "https://onedrive.live.com/download?cid=1859F496C483EBE4&resid=1859F496C483EBE4%21128&authkey=AI7R3Liq4dULql8&em=2"
    );
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
        <div className="welcome_image">
          <h3>experience</h3>
          {imgInfo.map((info, i) => {
            return (
              <div key={i} className="images_box">
                <span className="tag">{`<`}</span>
                <span className="tag_img">{`img `}</span>
                <span className="tag_src">{`src="${info.src}"`}</span>
                <span className="tag_alt">{`alt="${info.alt}"`}</span>
                <span className="tag">{`/>`}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Welcome;
