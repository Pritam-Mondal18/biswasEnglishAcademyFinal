import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp, IoPersonCircle } from "react-icons/io5";

const Header = ({
  homeRef,
  aboutRef,
  contactRef,
  gallaryRef,
  reviewRef,
  servicesRef,
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );
  const [activeSection, setActiveSection] = useState("home");

  const sections = [
    { ref: homeRef, name: "home" },
    { ref: aboutRef, name: "about" },
    { ref: servicesRef, name: "services" },
    { ref: gallaryRef, name: "gallery" },
    { ref: reviewRef, name: "review" },
    { ref: contactRef, name: "contact" },
  ];

  const handleMenuToggle = () => setShowMenu((prev) => !prev);

  const scrollToElement = (elementRef, name) => {
    if (elementRef?.current) {
      window.scrollTo({
        top: elementRef.current.offsetTop - 80,
        behavior: "smooth",
      });
      setActiveSection(name);
    }
    setShowMenu(false);
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 100;
      for (let section of sections) {
        if (
          section.ref.current &&
          scrollY >= section.ref.current.offsetTop &&
          scrollY <
            section.ref.current.offsetTop + section.ref.current.offsetHeight
        ) {
          setActiveSection(section.name);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <div className="navbar">
      <a href="/">
        <img src="/images/Final-logo.jpg" alt="Logo" className="logo" />
      </a>

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
            {sections.map(({ ref, name }) => (
              <li
                key={name}
                className={activeSection === name ? "active" : ""}
                onClick={() => scrollToElement(ref, name)}
              >
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      <ul className="menu-items menu-web">
        {sections.map(({ ref, name }) => (
          <li
            key={name}
            className={activeSection === name ? "active" : ""}
            onClick={() => scrollToElement(ref, name)}
          >
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </li>
        ))}
      </ul>

      <div className="icon-group">
        <IoPersonCircle className="toggle-icon login" />
        <span className="toggle-icon" onClick={toggleTheme}>
          {theme === "light" ? "🌙" : "☀️"}
        </span>
        <span className="menu-icon" onClick={handleMenuToggle}>
          {showMenu ? <IoCloseSharp /> : <GiHamburgerMenu />}
        </span>
      </div>
    </div>
  );
};

export default Header;
