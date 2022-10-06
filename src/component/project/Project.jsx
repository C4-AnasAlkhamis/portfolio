import "./project.css";
import { useEffect, useState } from "react";

const project_one = [
  { src: "./images/project-4-1.png", alt: "project image signIn" },
  { src: "./images/project-4-2.png", alt: "project image signUp" },
  { src: "./images/project-4-3.png", alt: "project image Admin" },
  { src: "./images/project-4-4.png", alt: "project image CreateGroup" },
  { src: "./images/project-4-5.png", alt: "project image Home" },
  { src: "./images/project-4-6.png", alt: "project image GroupPosts" },
  { src: "./images/project-4-7.png", alt: "project image Messenger" },
  { src: "./images/project-4-8.png", alt: "project image sendRequest" },
];
const project_tow = [
  { src: "./images/project-5-1.png", alt: "project image login" },
  { src: "./images/project-5-2.png", alt: "project image register" },
  { src: "./images/project-5-3.png", alt: "project image MainPage" },
  { src: "./images/project-5-4.png", alt: "project image HomePage" },
  { src: "./images/project-5-5.png", alt: "project image Cart" },
  { src: "./images/project-5-6.png", alt: "project image WishList" },
  { src: "./images/project-5-7.png", alt: "project image JoinUs" },
  { src: "./images/project-5-8.png", alt: "project image AdminPage" },
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
