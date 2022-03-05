import "./project.css";
import { useEffect, useState } from "react";
import project_4_1 from "./images/project-4-1.png";
import project_4_2 from "./images/project-4-2.png";
import project_4_3 from "./images/project-4-3.png";
import project_4_4 from "./images/project-4-4.png";
import project_4_5 from "./images/project-4-5.png";
import project_4_6 from "./images/project-4-6.png";
import project_4_7 from "./images/project-4-7.png";
import project_4_8 from "./images/project-4-8.png";
import project_5_1 from "./images/project-5-1.png";
import project_5_2 from "./images/project-5-2.png";
import project_5_3 from "./images/project-5-3.png";
import project_5_4 from "./images/project-5-4.png";
import project_5_5 from "./images/project-5-5.png";
import project_5_6 from "./images/project-5-6.png";
import project_5_7 from "./images/project-5-7.png";
import project_5_8 from "./images/project-5-8.png";

const project_one = [
  { src: project_4_1, alt: "project image signIn" },
  { src: project_4_2, alt: "project image signUp" },
  { src: project_4_3, alt: "project image Admin" },
  { src: project_4_4, alt: "project image CreateGroup" },
  { src: project_4_5, alt: "project image Home" },
  { src: project_4_6, alt: "project image GroupPosts" },
  { src: project_4_7, alt: "project image Messenger" },
  { src: project_4_8, alt: "project image sendRequest" },
];
const project_tow = [
  { src: project_5_1, alt: "project image login" },
  { src: project_5_2, alt: "project image register" },
  { src: project_5_3, alt: "project image MainPage" },
  { src: project_5_4, alt: "project image HomePage" },
  { src: project_5_5, alt: "project image Cart" },
  { src: project_5_6, alt: "project image WishList" },
  { src: project_5_7, alt: "project image JoinUs" },
  { src: project_5_8, alt: "project image AdminPage" },
];

const Project = () => {
  return (
    <div className="project_container">
      <div className="project_one_box">
        <div className="project_one_info_box">
          <h2>E-commerce & Services</h2>
          <div className="skills_interests">
            <ul>
              <li>Project name: TechniCorner</li>
              <li>
                An easy-to-use interactive website, that provides a variety of
                products that serve the industry sector.
              </li>
              <li>
                An easy-to-use interactive website, that provides a variety of
                products that serve the industry sector.
              </li>
              <li className="technology_box">
                Technology used
                <span>Backend: Node.js, Express, Socket.io</span>
                <span>Frontend: React.js, CSS3</span>
                <span>Database: MySQL</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="project_one">
          {project_one.map((img, i) => {
            return (
              <span style={{ "--i": i }}>
                <img key={i} src={img.src} alt={img.alt} />
              </span>
            );
          })}
        </div>
      </div>
      <div className="project_tow_box">
        <div>
          <h2>social media for players</h2>
          <div className="skills_interests">
            <ul>
              <li>social media for players</li>
              <li>
                Focuses on video games players, and offers them different
                advantages
              </li>
              <li>
                different advantages The website is intended for social
                networking and exchanging information and experiences..
              </li>
              <li className="technology_box">
                Technology used
                <span>Backend: Node.js, Express, Socket.io</span>
                <span>Frontend: React.js, CSS3</span>
                <span>Database: MongoDB</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="project_tow">
          {project_tow.map((img, i) => {
            return (
              <span style={{ "--i": i }}>
                <img key={i} src={img.src} alt={img.alt} />
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;
