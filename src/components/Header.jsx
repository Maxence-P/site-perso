import React, { useState } from 'react';
import "./Header.css";

const Header = () => {

    const [ menuToggle, menuSetToggle ] = useState(false);
    const toggleMenu = () => {
        menuSetToggle(!menuToggle);
    };

    return(
        <header>
            <p className="my-name">Maxence Pointeau</p>
            {!menuToggle ? 
                <div className="burger-icon" onClick={toggleMenu}>
                    <p className="burger-line"></p>
                    <p className="burger-line"></p>
                    <p className="burger-line"></p>
                </div> :
                <div className="cross" onClick={toggleMenu}>
                    <p className="cross-line-1"></p>
                    <p className="cross-line-2"></p>
                </div>}
            {menuToggle ? 
                <div className="menu-burger">
                    <a className="menu-link">Mes Techs</a>
                    <a className="menu-link">Mes Outils</a>
                    <a className="menu-link">Mes Trucs</a>
                    <a className="menu-link">LinkedIn</a>
                    <a className="menu-link">GitHub</a>
                </div> : 
            ""}
        </header>
    )
}

export default Header;