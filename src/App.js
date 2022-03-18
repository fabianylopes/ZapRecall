import Home from "./components/Home";
import Deck from "./components/Deck";
import Success from "./components/Success";
import Failure from "./components/Failure";

import { useState } from "react";

export default function App(){
    const [startRecall, setStartRecall] = useState('home');

    return (
        <>
            {(startRecall === 'home') && <Home setStartRecall={setStartRecall}/>}
            {(startRecall === 'deck') && <Deck setStartRecall={setStartRecall}/>}
            {(startRecall === 'success') && <Success setStartRecall={setStartRecall}/>}
            {(startRecall === 'failure') && <Failure setStartRecall={setStartRecall}/>}
        </>
    );
}
