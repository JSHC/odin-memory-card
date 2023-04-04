import { useState } from "react";
import Card from "./Card";

const CardManager = (props) => {
    const [cards, setCards] = useState([]);
    return (
        <div className="card-manager">
            {cards.map((card) => {
                return (
                    <Card 
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