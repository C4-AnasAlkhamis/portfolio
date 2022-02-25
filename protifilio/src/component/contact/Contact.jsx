import "./contact.css";

// import emailjs from "emailjs-com";

const Contact = () => {
  //   const sendEmail = (e) => {
  //     sendFeedBack();
  //     emailjs
  //       .sendForm(
  //         "service_0c3knvt",
  //         "template_02ihw4s",
  //         form.current,
  //         "user_HpGxyEqePdddiz4DOkw1R"
  //       )
  //       .then(
  //         (result) => {
  //         },
  //         (error) => {}
  //       );
  //   };

  return (
    <>
        <form
          className="feedbackForm"
          // ref={form} onSubmit={sendEmail}
        >
          <input
            id="sendBtn3"
            type="email"
            placeholder="Your Email Address"
            name="email"
            // onChange={(e) => {
            //   setEmail(e.target.value);
            // }}
          />
          <input
            id="sendBtn2"
            type="text"
            placeholder="Your Name"
            name="name"
            // onChange={(e) => {
            //   setName(e.target.value);
            // }}
          />
          <input
            id="sendBtn1"
            type="text"
            placeholder="Subject"
            name="subject"
            // onChange={(e) => {
            //   setSubject(e.target.value);
            // }}
          />
          <textarea
            id="sendBtn4"
            placeholder="Your Message Content"
            cols="80"
            rows="10"
            name="message"
            // onChange={(e) => {
            //   setFeedback(e.target.value);
            // }}
          />
          <input id="sendBtn5" type="submit" value="Send FeedBack " />
        </form>
    </>
  );
};
export default Contact;
