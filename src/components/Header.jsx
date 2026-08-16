import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import CompanyLogo from "../assets/logo -2.jpeg";

const links = [
  ["/", "Home"],
  ["/about", "About Us"],
  ["/products", "Products"],
  ["/projects", "Projects"],
  ["/contact", "Contact Us"]
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <Link to="/" className="brand" onClick={() => setOpen(false)}>
        <img src={CompanyLogo} alt="HG Energy and Network Solution logo" />
        <span>
          <strong>HG Energy and Network Solution</strong>
          <small>Nigeria</small>
        </span>
      </Link>

      <nav className="desktop-nav">
        {links.map(([to, label]) => (
          <NavLink key={to} to={to} end={to === "/"}>
            {label}
          </NavLink>
        ))}
      </nav>

      <button
        className="menu-toggle"
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? "×" : "☰"}
      </button>

      <nav className={`mobile-nav ${open ? "open" : ""}`}>
        {links.map(([to, label]) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            onClick={() => setOpen(false)}
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}