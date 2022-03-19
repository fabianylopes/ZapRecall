import styled from "styled-components";
import { useState } from "react";
import Flashcard from './Flashcard';
import Footer from './Footer';
import Header from './Header';
import { questions } from "./Data";

export default function Deck() {
    const [footerIcon, setFooterIcon] = useState('');
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [outcome, setOutcome] = useState('default');
    
    return (
        <Container>
            <Header/>

            {questions.map((q => {
                return (
                    <Flashcard 
                    currentQuestion={currentQuestion} 
                    setCurrentQuestion={setCurrentQuestion}
                    setOutcome={setOutcome} 
                    key={q.id} 
                    cardNumber={q.id} 
                    question={q.question} 
                    answer={q.answer}
                    setFooterIcon={setFooterIcon} 
                    />
                )
            })) }

            <Footer 
            currentQuestion={currentQuestion} 
            totalQuestions={questions.length}
            outcome={outcome}
            footerIcon={footerIcon}
            />
        </Container>
    );
}

const Container = styled.div`
    padding-top: 165px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
