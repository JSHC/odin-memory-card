import './App.css';
import CardManager from './components/CardManager';
import cat1 from './images/amber-kipp-75715CVEJhI-unsplash.jpg'
import cat2 from './images/milada-vigerova-7E9qvMOsZEM-unsplash.jpg'
import cat3 from './images/hang-niu-Tn8DLxwuDMA-unsplash.jpg'
import cat4 from './images/zoe-gayah-jonker-uhnbTZC7N9k-unsplash.jpg'
import cat5 from './images/mathieu-odin-YeQIAysCP3w-unsplash.jpg'
import cat6 from './images/timo-volz-mrTydVjg04o-unsplash.jpg'
import cat7 from './images/sajad-nori-s1puI2BWQzQ-unsplash.jpg'
import cat8 from './images/linli-xu-C26VKA9BMYQ-unsplash.jpg'
import { useState } from 'react';
import Score from './components/Score';


function App() {
  const cards = [
    {
      id: 1, image: cat1, alt: 'cat1', text: 'Cat 1'
    },
    {
      id: 2, image: cat2, alt: 'cat2', text: 'Cat 2'
    },
    {
      id:3, image: cat3, alt: 'cat3', text: 'Cat 3'
    },
    {
      id: 4, image: cat4, alt: 'cat4', text: 'Cat 4'
    },
    {
      id: 5, image: cat5, alt: 'cat5', text: 'Cat 5'
    },
    {
      id: 6, image: cat6, alt: 'cat6', text: 'Cat 6'
    },
    {
      id: 7, image: cat7, alt: 'cat7', text: 'Cat 7'
    },
    {
      id: 8, image: cat8, alt: 'cat8', text: 'Cat 8'
    },
  ];

  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [cardIdsClicked, setCardIdsClicked] = useState([]);

  const onCardClick = (id) => {
    setCurrentScore(currentScore + 1);
  }

  return (
    <div className="App">
      <h1>Memory Card</h1>
      <Score currentScore={currentScore} highScore={highScore} />
      <CardManager 
        cards={cards} 
        onCardClick={onCardClick}
        />
    </div>
  );
}

export default App;
