const date = new Date();
const currentDate = date.getFullYear();

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__box">
        <h2>Phone/WhatsApp</h2>
        <a
          href="https://wa.me/93708760475"
          target="_blank"
          rel="noopener noreferrer"
        >
          +93 708 760 475
        </a>
      </div>
      <div className="footer__box">
        <h2>Email</h2>
        <a href="mailto:rashidaymaq1994@gmail.com">rashidaymaq1994@gmail.com</a>
      </div>
      <div className="footer__box">
        <h2>Follow Me</h2>
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
      <div className="footer__box">
        <p>© {currentDate} by Abdul Rashid Aymaq.</p>
        <p>Frondend web developer</p>
      </div>
    </footer>
  );
}
