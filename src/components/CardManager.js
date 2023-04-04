import { useEffect, useState } from "react";
import Card from "./Card";
import '../styles/CardManager.css';

const CardManager = (props) => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        setCards(props.cards);
    }, [])
    return (
        <div className="card-manager">
            {cards.map((card) => {
                return (
                    <Card 
                    key={card.image}
                    image={card.image}
                    alt={card.alt}
                    text={card.text}
                    />
                )
            })}
        </div>
    )
}

export default CardManager;