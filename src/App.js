import Container from "./components/Container";
import Home from "./components/Home";

import { useState } from "react";

export default function App(){
    const [startRecall, setStartRecall] = useState('home');

    return (
        <>
            {(startRecall === 'home') ? <Home setStartRecall={setStartRecall}/> : <Container/>}
        </>
    );
}
