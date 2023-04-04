import { useEffect, useState } from 'react';
import '../styles/Card.css';

const Card = (props) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const image = new Image();
        image.src = props.image;
        image.onload = () => {
            setImageLoaded(true);
        }
    }, []);

    return (
        <div className="card" onClick={props.onClick}>
            {imageLoaded ? 
                <img className="card-image" src={props.image} alt="props.alt"></img>
            :
            <div>Loading...</div>
            }
            <div className="card-text">{props.text}</div>
        </div>
    )
}

export default Card;