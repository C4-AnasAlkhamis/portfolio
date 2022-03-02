import "./about.css";
const About = () => {
  return (
    <>
      <div className="about">
        <section className="about_paragraph">
          <h1>About Me</h1>
          <p>
            website development, converting mockups into usableweb presence with
            HTML, JavaScript or ReactjsOversaw back-end development using
            Node.js tomaintain website integrity, security, and
            efficiency.Planned and engineered RESTful web services tomanipulate
            dynamic datasets, like SQL:MYSQL andNoSQL:MongoDB.
            <br />
            <br />
            I have experience working as part of a team andindividually, I
            respect the time and deliver the tasksassigned to me before the
            deadline, I am committed tolearning and self-development so that I
            canconsistently achieve better results, I have an extremelyversatile
            skill set.
          </p>
        </section>
        <div className="about_more_info">
          <div className="skills_interests_box">
            <section className="skills_interests">
              <h2>Skills</h2>
              <ul>
                <li>JavaScript, HTML, Css</li>
                <li>React JS, jQuery</li>
                <li>Node js, Express</li>
                <li>MYSQL, MongoDB</li>
              </ul>
              <h2>Interests</h2>

              <ul>
                <li>Writing code</li>
                <li>Maintenance things</li>
                <li>Learning new Techniques</li>
                <li>Watching Anime</li>
                <li>Playing video games</li>
              </ul>
            </section>
          </div>

          <div className="education_experiences">
            <section className="education">
              <h2>Education</h2>
              <p>
                <span> MERAKI Academy</span>
                <span>Full Stack Development Track</span>
                <span>Mar / 2021</span>
              </p>
              <p>
                <span> 1 Million Jordanian Coders</span>
                <span>Full Stack Development Track</span>
                <span> October 2021</span>
              </p>
            </section>
            <section className="experiences">
              <h2>Main experiences</h2>
              <ul>
                <li>
                  <h3>Operating machines</h3>
                  <span>
                    which depends on finding the best basic settings for
                    operating machines and giving the best production
                  </span>
                  <span>our years of experience 2014 - 2018 </span>
                </li>

                <li>
                  <h3>Metal forming</h3>
                  <span>
                    A process in which metals are formed into something useful,
                    it depends on machine and welding.
                  </span>
                  <span>two years of experience 2018 - 2020</span>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
