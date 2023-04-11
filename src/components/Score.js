import '../styles/Score.css';

const Score = (props) => {
    return (
        <div className="score">
            <div class="score-text">
                <span className="current-score">Current score: {props.currentScore}</span>
                <span className="high-score">High score: {props.highScore}</span>
            </div>
        </div>
    )
}

export default Score;