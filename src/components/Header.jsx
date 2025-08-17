import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom"; // added useNavigate
import Cookies from "js-cookie";
import "./Header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp, IoPersonCircle } from "react-icons/io5";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate(); // initialize navigate
  const [showMenu, setShowMenu] = useState(false);
  const [theme, setTheme] = useState(() => Cookies.get("theme") || "light");

  useEffect(() => {
    Cookies.set("theme", theme, { expires: 365 });
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Review", path: "/review" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="navbar">
      <Link to="/">
        <img src="/images/logoFinal.png" alt="Logo" className="logo" />
      </Link>

      <h3 className="heading">Biswas English Academy</h3>

      <AnimatePresence>
        {showMenu && (
          <motion.ul
            className="menu-items menu-mobile"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {links.map(({ name, path }) => (
              <li
                key={name}
                className={location.pathname === path ? "active" : ""}
                onClick={() => setShowMenu(false)}
              >
                <Link to={path}>{name}</Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      <ul className="menu-items menu-web">
        {links.map(({ name, path }) => (
          <li key={name} className={location.pathname === path ? "active" : ""}>
            <Link to={path}>{name}</Link>
          </li>
        ))}
      </ul>

      <div className="icon-group">
        <IoPersonCircle
          className="toggle-icon login"
          onClick={() => navigate("/login")} // navigate instead of alert
        />
        <span className="toggle-icon" onClick={toggleTheme}>
          {theme === "light" ? "🌙" : "☀️"}
        </span>
        <span
          className="menu-icon"
          onClick={() => setShowMenu((prev) => !prev)}
        >
          {showMenu ? <IoCloseSharp /> : <GiHamburgerMenu />}
        </span>
      </div>
    </header>
  );
};

export default Header;
