function HelpWindow({onClose}) {
    return (
        <div className="help-container">
            <div className="help-window">
                <button className="close-btn" onClick={onClose}>X</button>
                <p className="help-text">The objective of the game is to accumulate as many points as possible by choosing cards without selecting the same card twice. The game continues until you choose a card you have already picked or until the cards run out.</p>
            </div>
        </div>
    )
}

export default HelpWindow