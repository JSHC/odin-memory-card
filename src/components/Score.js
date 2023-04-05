const Score = (props) => {
    return (
        <div className="score">
            <span className="current-score">{props.currentScore}</span>
            <span className="high-score">{props.highScore}</span>
        </div>
    )
}

export default Score;