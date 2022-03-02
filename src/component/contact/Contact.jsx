import "./contact.css";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import validator from "validator";
import { ImLinkedin2 } from "react-icons/im";
import { FiGithub } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";

const Contact = () => {
  const form = useRef();
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [warning, setWarning] = useState("");

  const validateEmail = (e) => {
    e.preventDefault();
    if (validator.isEmail(email)) {
      sendEmail(e);
    } else {
      setEmail("Please Enter valid Email!");
    }
  };
  const sendEmail = (e) => {
    e.preventDefault();
    if (!email || !subject || !name || !message) {
      setWarning("Please fill in all the information");
    } else {
      setLoading(!loading);
      setWarning("");

      emailjs
        .sendForm(
          "service_hh9kjvr",
          "template_1v4eifn",
          form.current,
          "dRH2DGYZs7prv3I0H"
        )
        .then(
          (result) => {
            setEmail("");
            setSubject("");
            setName("");
            setMessage("");
            setLoading(false);
          },
          (error) => {}
        );
    }
  };
  return (
    <>
      <div className="center">
        {!loading ? (
          <div className="emailForm_box">
            <form className="emailForm" ref={form} onSubmit={validateEmail}>
              <h1>Contact Me</h1>
              <input
                type="text"
                placeholder="Subject"
                name="subject"
                value={subject}
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
              />
              <input
                type="email"
                placeholder="Your Email Address"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />

              <textarea
                placeholder="Your Message Content"
                name="message"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />

              <input
                style={{ opacity: `${loading ? 0 : 1}` }}
                id="sendBtn"
                type="submit"
                value="Send email"
                disabled={loading ? true : false}
              />
            </form>
            {warning ? <span className="warning">{warning}</span> : null}
          </div>
        ) : null}
        {loading ? (
          <div className="loadingio-spinner-blocks-flmttbazwc5">
            <div className="ldio-9c1aqzrcjvl">
              <div
                style={{ left: "38px", top: "38px", animationDelay: "0s" }}
              ></div>
              <div
                style={{ left: "80px", top: "38px", animationDelay: "0.125s" }}
              ></div>
              <div
                style={{ left: "122px", top: "38px", animationDelay: "0.25s" }}
              ></div>
              <div
                style={{ left: "38px", top: "80px", animationDelay: "0.875s" }}
              ></div>
              <div
                style={{ left: "122px", top: "80px", animationDelay: "0.375s" }}
              ></div>
              <div
                style={{ left: "38px", top: "122px", animationDelay: "0.75s" }}
              ></div>
              <div
                style={{ left: "80px", top: "122px", animationDelay: "0.625s" }}
              ></div>
              <div
                style={{ left: "122px", top: "122px", animationDelay: "0.5s" }}
              ></div>
            </div>
          </div>
        ) : null}

        <div className="information_box">
          <h1>contact information</h1>
          <div className="information_list">
            <ul>
              <li>
                <i>
                  <BsPhone />
                </i>
                +962790456985
              </li>
              <li>
                <i>
                  <AiOutlineMail />
                </i>
                anas.alkhamis@outlook.com
              </li>
              <li>
                <a href="https://github.com/AnasAlkhamis">
                  <FiGithub style={{ cursor: "pointer" }} />
                </a>
                Githup
              </li>
              <li>
                <a href="https://www.linkedin.com/in/anasal-khamis/">
                  <ImLinkedin2 style={{ cursor: "pointer" }} />
                </a>
                Linkedin
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
