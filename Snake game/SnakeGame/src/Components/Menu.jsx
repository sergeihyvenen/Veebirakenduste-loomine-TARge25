//Menu.js
import React from "react";
import "./Menu.css";

const Menu = ({ onRouteChange }) => {
    return (
        <div className="wrapper">
            <div>
                <button
                    onClick={onRouteChange}
                    className="start"
                >
                    start game
                </button>
            </div>
        </div>
    );
};

export default Menu;