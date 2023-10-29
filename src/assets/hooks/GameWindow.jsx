import logo from "../images/Pokemon-logo.webp"
import "../style/GameWindow.css"

function GameWindow({backHome, pokemons, onClickCard, score, bestScore}) {

    return (
        <div className="game-window">
            <header className="game-header">
                <button className="home-btn" onClick={backHome}>
                    <img src={logo} alt="Home button" className="home-logo"/>
                </button>
                <div className="score-container">
                    <p>Score: {score}</p>
                    <p>Best score: {bestScore}</p>
                </div>
            </header>
            <div className="cards-container">
                {pokemons.map((poke) => (
                    <button key={poke.id} className="card" name={poke.name }onClick={onClickCard}>
                        <img src={poke.sprite} alt={poke.name} className="poke-img"/>
                        <p>{poke.name}</p>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default GameWindow

