import React, { useState, useEffect } from "react";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { useGlobalContext } from "./context";

const ToggleTheme = () => {
  const { theme, setTheme } = useGlobalContext();

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);
  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };
  return (
    <div className="container-theme" onClick={toggleTheme}>
      <button className="btn-theme">
        {theme === "light-theme" ? (
          <MdSunny className="icon" />
        ) : (
          <FaMoon className="icon" />
        )}
      </button>
    </div>
  );
};

export default ToggleTheme;
