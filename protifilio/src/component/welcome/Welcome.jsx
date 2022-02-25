import "./welcome.css";

const Welcome = () => {
  return (
    <header className="welcome_header">
      <span className="open_tag">{"<header>"}</span>
      <div className="header_box">
        <span className="header_hello">Hello</span>
        <h1 className="header_name">Anas Al-Khamis</h1>
        <p className="header_info">
          Web developer <span className="backend">Backend</span> | <span className="frontend">Frontend</span>
        </p>
      </div>
      <span className="close_tag">{"</header>"}</span>
    </header>
  );
};

export default Welcome;
