import React from 'react';
import { ReactComponent as Logo } from "./CruiseWorldInc_blaafarver.svg"
// scss
import "./Navigation.scss";

const Navigation = () => {
    return (
        <div className="position-fixed w-100 zindex">
            <nav role="navigation" id="navigation" className="row position-relative">
            <a href="index.html" className="col-11">
                <Logo className="logo" />
            </a>
            <div id="menuToggle" className="col-1">

                <input type="checkbox" className="burger" />

                <span></span>
                <span></span>
                <span></span>



                <ul id="menu">
                    <a href="#"><li>Forside</li></a>
                    <a href="#"><li>Nyheder</li></a>
                    <a href="#"><li>Kundeservice</li></a>
                    <a href="#"><li>Firmaprofil</li></a>
                    <a href="#"><li>Opret konto</li></a>
                    <a href="#"><li>Tilmeld butik</li></a>
                    <form action="">
                        <input type="text" />
                        <button type="submit">Search</button>
                    </form>
                    <div className="login">
                        
                    </div>
                </ul>


            </div>
        </nav>
        </div>
        
    )
}

export default Navigation
