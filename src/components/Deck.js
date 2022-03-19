import styled from "styled-components";
import { useState } from "react";
import Flashcard from './Flashcard';
import Footer from './Footer';
import Header from './Header';

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
                key={q.card} 
                cardNumber={q.card} 
                question={q.question} 
                answer={q.answer} 
                />
            )
        })) }
        <Footer 
        currentQuestion={currentQuestion} 
        totalQuestions={questions.length}
        outcome={outcome}
        setOutcome={setOutcome} 
        />
    </Container>
  );
}

const questions = [
    {
        card: "1",
        question: "O que é JSX?",
        answer: "Uma extensão de linguagem do JavaScript"
    },
    {
        card: "2",
        question: "O React é __",
        answer: "uma biblioteca JavaScript para construção de interfaces"
    },
    {
        card: "3",
        question: "Componentes devem iniciar com __",
        answer: "letra maiúscula"
    },
    {
        card: "4",
        question: "Podemos colocar __ dentro do JSX",
        answer: "expressões"
    },
    {
        card: "5",
        question: "O ReactDOM nos ajuda __",
        answer: "interagindo com a DOM para colocar componentes React na mesma"
    },
    {
        card: "6",
        question: "Usamos o npm para __",
        answer: "gerenciar os pacotes necessários e suas dependências"
    },
    {
        card: "7",
        question: "Usamos props para __",
        answer: "passar diferentes informações para componentes"
    },
    {
        card: "8",
        question: "Usamos estado (state) para __",
        answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
    }  
];

const Container = styled.div`
    padding-top: 165px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`