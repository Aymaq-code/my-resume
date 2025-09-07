import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Navigation() {
  const [toggle, setIsToggle] = useState(false);
  const navigate = useNavigate();
  function handleToggleBtn() {
    setIsToggle((prev) => !prev);
  }

  return (
    <nav className="navigation">
      <div className="navigation__left">
        <h2 onClick={() => navigate("/")}>Abdul Rashid Aymaq</h2>
        <p>Frontend Developer</p>
      </div>
      <ul
        className={`navigation__right ${
          toggle ? "navigation__right--active" : ""
        }`}
      >
        <li>
          <NavLink to="/resume">Resume</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      <div className="navigation__toggleBtn" onClick={handleToggleBtn}>
        <span className={toggle ? "toggleBtnLine_1" : ""}></span>
        <span className={toggle ? "toggleBtnLine_2" : ""}></span>
        <span className={toggle ? "toggleBtnLine_3" : ""}></span>
      </div>
    </nav>
  );
}
