import React from 'react';
import '../styles/App.css';


const Nav = () => {
    return (      
        <>
        <header className="header" id="header">
            <nav className="nav">
                <div className="nav_logo">
                <img src="https://carlosvargasart.com/Joss/PockeletFigma/image/logo.png" alt="" />

                </div>
                <div className="nav_menu" id="nav-menu">
                    <ul className="nav_list">
                        <li className="nav_item">
                            <a href="#" className="nav_link">Home</a>
                        </li>
                        <li className="nav_item">
                            <a href="html/investing.html" className="nav_link">start investing</a>
                        </li>
                        <li className="nav_item">
                            <a href="html/startdevelopming.html" className="nav_link">start developming</a>
                        </li>
                    </ul>
                    <i className="nav_close bi bi-x" id="nav-close"></i>
                </div>
                <div className="nav_toggle" id="nav-toggle">
                    <i className="bi bi-list"></i>
                </div>
            </nav>
        </header>
        
        </>
    );
};

export default Nav;   