import logo from "../images/Pokemon-logo.webp"
import "../style/InitialWindow.css"
import { useState } from 'react';
import HelpWindow from './HelpWindow';

function InitialWindow({onClick}) {
    const [displayHelp, setDisplayHelp] = useState(false);

    function onClose() {
        setDisplayHelp(false);
    }

    function onOpen() {
        setDisplayHelp(true);
    }

    return (
        <div className="initial-window">
            {displayHelp && <HelpWindow onClose = {onClose}/>}
            <button className="help-btn" onClick={onOpen}>?</button>
            <img src={logo} alt="Pokémon logo" className="main-logo"/>
            <h1 className="game-title">Memory Game</h1>
            <div className="difficulty-selector">
                <button className="difficulty-btn" onClick={onClick}>Easy</button>
                <button className="difficulty-btn" onClick={onClick}>Medium</button>
                <button className="difficulty-btn" onClick={onClick}>Hard</button>
            </div>
        </div>
    )
}

export default InitialWindow