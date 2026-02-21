import React from "react";
import './../../root.css'
import dark from '../../assets/moon.svg'
import light from '../../assets/sun.svg'


function Theme() {
  const setTheme = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
  };

  return (
    <>
      <button className="themeBtn" onClick={() => setTheme("light")}>
        <img src={light} alt="" />
      </button>
      <button className="themeBtn" onClick={() => setTheme("dark")}>
        <img src={dark} alt="" />
      </button>
    </>
  );
}
 
export default Theme;