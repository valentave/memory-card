import "../style/ResultWindow.css"

function ResultWindow({result, backHome}) {
    return (
        <div className="result-container">
            <div className= {result ? "win-background" : "lose-background" }>
                <p className={result ? "win-text" : "lose-text"}>{result ? "You won!" : "You Lost!"}</p>
                <button className="tryagain-btn" onClick={backHome}>Try Again</button>
            </div>
        </div>
    )
}

export default ResultWindow