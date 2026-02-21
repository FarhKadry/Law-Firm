import React from "react";
import './../../root.css'

function Theme() {
const setTheme = (theme) => {
document.documentElement.setAttribute("data-theme", theme);
};
return ( <>
    <button onclick={() => setTheme ("light")}>Light Mode</button>
    <button onClick={() => setTheme("dark")}>Dark Mode</button>
</> );
}
 
export default Theme;