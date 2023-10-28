import logo from "../images/Pokemon-logo.webp"
import "../style/InitialWindow.css"

function InitialWindow({onClick}) {
    return (
        <div className="initial-window">
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