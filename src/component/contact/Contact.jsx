import "./contact.css";

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
const Contact = () => {
  const form = useRef();
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [warning, setWarning] = useState("");
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
        <form className="emailForm" ref={form} onSubmit={sendEmail}>
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
            id="sendBtn5"
            type="submit"
            value="Send email "
            disabled={loading ? true : false}
          />
        </form>
        {warning ? <div>{warning}</div> : null}
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
      </div>
    </>
  );
};
export default Contact;
