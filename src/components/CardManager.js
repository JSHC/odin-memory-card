import { useEffect, useState } from "react";
import Card from "./Card";
import '../styles/CardManager.css';

const CardManager = (props) => {
    const [cards, setCards] = useState([]);

    const onCardClick = (id) => {
        console.log('click' + id);
        setCards(getCardsRandom());
    }

    const getCardsRandom = () => {
        const tempCards = [...props.cards];
        const newCards = [];
        while (tempCards.length > 0) {
            const randomIndex = Number.parseInt(Math.random() * (tempCards.length));
            newCards.push(tempCards.splice(randomIndex, 1)[0]);
        }

        return newCards;
    }

    useEffect(() => {
        const newCards = getCardsRandom();
        console.log(newCards);
        setCards(newCards);
    }, [])
    return (
        <div className="card-manager">
            {cards.map((card) => {
                console.log(card);
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