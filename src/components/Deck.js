import React from 'react'
import Flashcard from './Flashcard';
import Footer from './Footer';
import Header from './Header';

export default function Deck() {
  return (
    <>
        <Header/>
        {questions.map((q => {
            return (
                <Flashcard key={q.card} cardNumber={q.card} question={q.question} answer={q.answer} />
            )
        })) }
        <Footer currentQuestion={0} totalQuestions={8}/>
    </>
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