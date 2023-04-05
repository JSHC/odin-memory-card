import '../styles/Score.css';

const Score = (props) => {
    return (
        <div className="score">
            <span className="current-score">Current score: {props.currentScore}</span>
            <span className="high-score">High score: {props.highScore}</span>
        </div>
    )
}

export default Score;