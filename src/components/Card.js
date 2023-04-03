const Card = (props) => {
    return (
        <div className="card">
            <img className="card-image" src="props.image" alt="props.alt"></img>
            <div className="card-text">{props.text}</div>
        </div>
    )
}

export default Card;