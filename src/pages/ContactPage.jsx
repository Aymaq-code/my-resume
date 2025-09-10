import { useState } from "react";
import emailjs from "emailjs-com";
import Footer from "../layouts/Footer";
import Navigation from "../layouts/Navigation";
import Success from "../messages/Success";
import Unsuccess from "../messages/Unsuccess";
import ErrorMsg from "../messages/ErrorMsg";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);
  const [successKey, setSuccessKey] = useState(0);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2utvxpf", // Service ID
        "template_u4jtf2d", // Template ID
        e.target,
        "BsG1_TvuetovfbRee" // Public Key
      )
      .then(
        (result) => {
          setStatus("success");
          setSuccessKey((prev) => prev + 1);
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          setStatus("error");
        }
      );
  }

  return (
    <main className="contactPage">
      <Navigation />
      <div className="container">
        <div className="contactPage__contents">
          {/* left contents */}
          <div className="contactPage__contents--left">
            {/* left contents text */}

            <div className="textBox">
              <h1>Contact Us</h1>
              <p>
                Please feel free to contact us and we will get back to you as
                soon as we can.
              </p>
            </div>

            {/* left contents form */}
            <form onSubmit={sendEmail} className="form">
              <input
                type="text"
                placeholder="Name"
                name="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                placeholder="Message"
                name="message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
          {/* right contents */}
          <div className="contactPage__contents--right">
            {/* success / error messages */}
            <div className="sendStatus">
              {status === "success" && (
                <Success key={successKey}>
                  Your message sent successfully!
                </Success>
              )}
              {status === "error" && <Unsuccess />}
            </div>
            <div className="textBox">
              <h2>Talk to me</h2>
              <a
                href="https://wa.me/93708760475"
                target="_blank"
                rel="noopener noreferrer"
              >
                +93 708 760 475
              </a>
              <br />
              <a href="mailto:rashidaymaq1994@gmail.com">
                rashidaymaq1994@gmail.com
              </a>

              <div className="socialBox">
                <a
                  href="https://www.facebook.com/yourprofile"
                  aria-label="Facebook"
                  target="_blank"
                >
                  <i className="fab fa-facebook"></i>
                </a>

                <a
                  href="https://www.linkedin.com/in/abdul-rashid-aymaq-3854a435a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin"></i>
                </a>

                <a href="https://instagram.com" target="_blank">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
