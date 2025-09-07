const date = new Date();
const currentDate = date.getFullYear();

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__box">
        <h2>Phone/WhatsApp</h2>
        <a>+93 708 760 475</a>
      </div>
      <div className="footer__box">
        <h2>Email</h2>
        <a>rashidaymaq1994@gmail.com</a>
      </div>
      <div className="footer__box">
        <h2>Follow Me</h2>
        <a href="https://facebook.com" target="_blank">
          <i class="fab fa-facebook"></i>
        </a>

        <a href="https://linkedin.com" target="_blank">
          <i class="fab fa-linkedin"></i>
        </a>

        <a href="https://instagram.com" target="_blank">
          <i class="fab fa-instagram"></i>
        </a>
      </div>
      <div className="footer__box">
        <p>© {currentDate} by Abdul Rashid Aymaq.</p>
        <p>Frondend web developer</p>
      </div>
    </footer>
  );
}
