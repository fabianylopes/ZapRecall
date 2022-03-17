import Answer from "./components/Answer";
import Container from "./components/Container";
import Home from "./components/Home";
import Question from "./components/Question";

import { useState } from "react";

export default function App(){
    const [startRecall, setStartRecall] = useState('home');

    return (
        <>
            {(startRecall === 'home') ? <Home setStartRecall={setStartRecall}/> : <Container/>}
            {/* <Container/> */}
            {/* <Question/>
            <Answer/> */}

        </>
    );
}
