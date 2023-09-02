import { useEffect, useState } from 'react';
import axios from 'axios';
import { Cards, ICard } from './components/Cards/Cards';
import { InfoBar } from './components/InfoBar/InfoBar';

const baseURL = "https://jsonplaceholder.typicode.com/todos";



function App() {
    const [cards, setCards] = useState<ICard[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
      setIsLoading(true)
      axios.get(baseURL)
      .then(response => {
        setCards(response.data)
        setIsLoading(false)
      })
      .catch(error=> {
        console.log('Error', error.message);
      })
    }, [])

    if (!isLoading) {
        return (
            <div className="App">
            <InfoBar cardsValue={cards.length} />
            <Cards cards={cards} />
        </div>
        );
      } else {
        return (
            <div className="App">
            Loading<div className="lds-ring"><div></div><div></div><div></div><div></div></div>
            </div>
        )
      }
}

export default App;
