import styled from "styled-components";
import { useState } from "react";

export default function Deck(){
    const [showQuestion, setShowQuestion] = useState('start');
    // const [showAnswer, setShowAnswer] = useState('');

    function show(){
        setShowQuestion('');
        console.log('passando por aqui');
    }

    return (
        <Flashcards>
            {questions.map((q) => { 
                return (
                    showQuestion === 'start' ? <Start key={q.deck} deck={q.deck} onClick={show}/> : <Question key={q.deck} question={q.question}/>
                )})}
        </Flashcards>
    );

    function Start(props){
        return (
            <Card>
                <TextQ>Pergunta {props.deck}</TextQ>
                <img src="./assets/go.png"/>
            </Card>
        );
    }
}



function Question(props){

    return (
        <QuestionCard>
            <Text>{props.question}</Text>
            <Arrow>
                <img src="./assets/setinha.png"/>
            </Arrow>
        </QuestionCard>
    );
}

function Answer(props){
    return (
        <AnswerCard>
            <Text>{props.answer}</Text>
            <ButtonsBox>   
                <Button>Não lembrei</Button>
                <Button>Quase não lembrei</Button>
                <Button>Zap!</Button>
            </ButtonsBox>
        </AnswerCard>
    );
}

const questions = [
    {
        deck: "1",
        question: "O que é JSX?",
        answer: "Uma extensão de linguagem do JavaScript"
    },
    {
        deck: "2",
        question: "O React é __",
        answer: "uma biblioteca JavaScript para construção de interfaces"
    },
    {
        deck: "3",
        question: "Componentes devem iniciar com __",
        answer: "letra maiúscula"
    },
    {
        deck: "4",
        question: "Podemos colocar __ dentro do JSX",
        answer: "expressões"
    },
    {
        deck: "5",
        question: "O ReactDOM nos ajuda __",
        answer: "interagindo com a DOM para colocar componentes React na mesma"
    },
    {
        deck: "6",
        question: "Usamos o npm para __",
        answer: "gerenciar os pacotes necessários e suas dependências"
    },
    {
        deck: "7",
        question: "Usamos props para __",
        answer: "passar diferentes informações para componentes"
    },
    {
        deck: "8",
        question: "Usamos estado (state) para __",
        answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
    }  
];

export { questions };

const Flashcards = styled.div`

`

const Card = styled.div`
    width: 182px;
    height: 40px;
    border-radius: 5px;
    margin-bottom: 5px;
    background-color: #fff;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    padding-right: 16px;
    padding-left: 14px;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
        height: 15px;
    }
`

const TextQ = styled.p`
    color: #333333;
    //color: #FF3030;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    //text-decoration-line: line-through;
`

const AnswerCard = styled.div`
    width: 182px;
    height: 80px;
    padding: 13px 4px 3px 4px;
    margin-bottom: 14px;
    background-color: #fff;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const ButtonsBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Button = styled.button`
    width: 55px;
    height: 24px;
    border-radius: 5px;
    background-color: #FF3030;
    border: none;
    cursor: pointer;

    font-family: 'Recursive', sans-serif;
    color: #fff;
    font-weight: 400;
    font-size: 7px;
    line-height: 8px;
    
`

const QuestionCard = styled.div`
    width: 182px;
    height: 80px;
    padding: 13px 8px 7px 6px;
    margin-bottom: 14px;
    background-color: #fff;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Text = styled.h1`
    color: #333333;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
`

const Arrow = styled.div`
    cursor: pointer;

    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
`