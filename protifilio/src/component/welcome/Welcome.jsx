import "./welcome.css";
import { RiDownloadCloudFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { saveAs } from "file-saver";
const Welcome = () => {
  const path = useNavigate();
  const saveFile = () => {
    saveAs(
      "https://onedrive.live.com/download?cid=1859F496C483EBE4&resid=1859F496C483EBE4%21128&authkey=AI7R3Liq4dULql8&em=2"
    );
  };

  return (
    <>
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
    </>
  );
};

export default Welcome;
