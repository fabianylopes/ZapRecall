import Home from "./components/Home";
import Deck from "./components/Deck";
import { useState } from "react";

export default function App(){
    const [startRecall, setStartRecall] = useState('home');

    return (
        <>
            {(startRecall === 'home') && <Home setStartRecall={setStartRecall}/>}
            {(startRecall === 'deck') && <Deck setStartRecall={setStartRecall}/>}
        </>
    );
}
