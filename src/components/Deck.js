import styled from "styled-components";
import { useState } from "react";
import Flashcard from './Flashcard';
import Footer from './Footer';
import Header from './Header';

export default function Deck(props) {
    const {setStartRecall, goal, setGoal} = props;

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [footerIcon, setFooterIcon] = useState([]);
    const [outcome, setOutcome] = useState('default');
    
    return (
        <Container>
            <Header/>

            {questions.map((q => {
                return (
                    <Flashcard 
                    key={q.id} 
                    idCard={q.id} 
                    question={q.question} 
                    answer={q.answer}
                    currentQuestion={currentQuestion} 
                    setCurrentQuestion={setCurrentQuestion}
                    setOutcome={setOutcome} 
                    footerIcon={footerIcon}
                    setFooterIcon={setFooterIcon} 
                    goal={goal}
                    />
                    )
                }))}

            <Footer 
            currentQuestion={currentQuestion} 
            setCurrentQuestion={setCurrentQuestion}
            totalQuestions={questions.length}
            outcome={outcome}
            footerIcon={footerIcon}
            setFooterIcon={setFooterIcon}
            setStartRecall={setStartRecall} 
            shuffleObject={shuffleObject}
            setGoal={setGoal}
            />
        </Container>
    );
}

const questions = [
    {
        question: "O que é JSX?",
        answer: "Uma extensão de linguagem do JavaScript"
    },
    {
        question: "O React é __",
        answer: "uma biblioteca JavaScript para construção de interfaces"
    },
    {
        question: "Componentes devem iniciar com __",
        answer: "letra maiúscula"
    },
    {
        question: "Podemos colocar __ dentro do JSX",
        answer: "expressões"
    },
    {
        question: "O ReactDOM nos ajuda __",
        answer: "interagindo com a DOM para colocar componentes React na mesma"
    },
    {
        question: "Usamos o npm para __",
        answer: "gerenciar os pacotes necessários e suas dependências"
    },
    {
        question: "Usamos props para __",
        answer: "passar diferentes informações para componentes"
    },
    {
        question: "Usamos estado (state) para __",
        answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
    }  
];

shuffleObject();

function shuffleObject(){
    questions.sort(() => Math.random() - 0.5);
    
    for (let i = 0; i < questions.length; i++) {
        questions[i] = {...questions[i], id: (i+1)}    
    }
}

const Container = styled.div`
    padding-top: 165px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
