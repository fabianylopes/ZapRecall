import Home from "./components/Home";
import Deck from "./components/Deck";
import { useState } from "react";

export default function App(){
    const [startRecall, setStartRecall] = useState('home');
    const [goal, setGoal] = useState('');

    return (
        <>
            {(startRecall === 'home') && <Home setStartRecall={setStartRecall} goal={goal} setGoal={setGoal}/>}
            {(startRecall === 'deck') && <Deck setStartRecall={setStartRecall} goal={goal} setGoal={setGoal}/>}
        </>
    );
}
