import { useEffect, useState } from "react";
import Card from "./Card";
import '../styles/CardManager.css';

const CardManager = (props) => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        setCards(props.cards);
    }, [])

    const onCardClick = (id) => {
        console.log('click' + id);
    }
    return (
        <div className="card-manager">
            {cards.map((card) => {
                return (
                    <Card 
                    id={card.id}
                    key={card.id}
                    image={card.image}
                    alt={card.alt}
                    text={card.text}
                    onClick={onCardClick}
                    />
                )
            })}
        </div>
    )
}

export default CardManager;