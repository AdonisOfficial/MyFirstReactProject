import {useState} from 'react'
import './App.css'
import {people} from "./data.ts";


interface ListProps {
    filterTxt?: string;
}

function List({filterTxt}: ListProps) {
    const filteredPeople = people.filter((person) => {
       if (!filterTxt) {
           return true;
       }
       const searchText = person.name + person.Age + person.profession
        return searchText.includes(filterTxt)
    }

    );

    const listItems = filteredPeople.map((person) => (
        <li key={person.id}>
            <p>
                <b>{person.name}</b>
                {' ' + person.Age + ' '}
                known for {person.profession}
            </p>
        </li>
    ));
    return <ul>{listItems}</ul>;
}

function App() {
    const [countIncrement, setCountIncrement] = useState(0);
    const [countDecrement, setCountDecrement] = useState(0);
    const [isListOpen, setListOpen] = useState(false);
    const [inputText, setInputText] = useState('Hello Wolfgang')

    const toggleList = () => {
        setListOpen(!isListOpen);
    };
    const resetCounters = () => {
        setCountIncrement(0);
        setCountDecrement(0);
    };
    const InputChange = (i: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(i.target.value);

    }

    return (
        <>
            <div className="app">
            <h1>My Project</h1>
            <div className="card">
                <button onClick={() => setCountIncrement((countIncrement) => countIncrement + 1)}
                        disabled={countIncrement == 10}>
                    count is {countIncrement}
                </button>

                <button onClick={() => setCountDecrement((countDecrement) => countDecrement - 1)}
                        disabled={countDecrement == -10}>
                    count is {countDecrement}
                </button>

                <button onClick={resetCounters}>Reset</button>

                <input type="text" value={inputText.toLowerCase()} onChange={InputChange}/>
                <p>You: {inputText}</p>

                <div>
                    <button onClick={toggleList}>
                        {isListOpen ? 'Close List' : 'Open List'}
                    </button>
                    {isListOpen && <List filterTxt={inputText}/>}
                </div>
            </div>
            </div>
            <List filterTxt={inputText}/>

        </>
    );
}

export default App
