import styled from "styled-components";
import Answer from "./Answer";
import Question from "./Question";
import { useState } from "react";

export default function Flashcards(){

    const [showQuestion, setShowQuestion] = useState('');

   
    return (
        <Cards>
            {(showQuestion === 'turned') ? <Deck/> : <Question/>}
        </Cards>
    );
}

function Deck(props){
    return (
        <Card>
            <Text>Pergunta {props.deck}</Text>
            <img src="./assets/go.png"/>
        </Card>
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

const Cards = styled.div`

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

const Text = styled.p`
    color: #333333;
    //color: #FF3030;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    //text-decoration-line: line-through;
`
