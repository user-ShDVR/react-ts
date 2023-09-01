import { useEffect, useState } from 'react';
import axios from 'axios';
import { Cards, ICard } from './components/Cards/Cards';
import { InfoBar } from './components/InfoBar/InfoBar';

const baseURL = "https://jsonplaceholder.typicode.com/todos";



function App() {
    const [cards, setCards] = useState<ICard[] | null>(null);
    useEffect(() => {
        axios.get(baseURL)
            .then((response) => {
                setCards(response.data);
            })
    }, [])
    if (!cards) return null;
    return (
        <div className="App">
            <InfoBar cardsValue={cards.length} />
            <Cards cards={cards} />
        </div>
    );
}

export default App;
