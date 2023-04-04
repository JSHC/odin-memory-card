import './App.css';
import CardManager from './components/CardManager';
import cat1 from './images/amber-kipp-75715CVEJhI-unsplash.jpg'
import cat2 from './images/milada-vigerova-7E9qvMOsZEM-unsplash.jpg'

function App() {
  const cards = [
    {
      id: 1, image: cat1, alt: 'cat1', text: 'Cat 1'
    },
    {
      id: 2, image: cat2, alt: 'cat2', text: 'Cat 2'
    }
  ];
  return (
    <div className="App">
      <CardManager cards={cards} />
    </div>
  );
}

export default App;
