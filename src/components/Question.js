import styled from "styled-components";
import { questions } from "./Flashcards";
import { useState } from "react";

export default function Question(){

    const [showAnswer, setShowAnswer] = useState('turned');

    return (
        <QuestionCard>
            <Text>{questions[0].question}</Text>
            <Arrow onClick={() => setShowAnswer('answer')}>
                <img src="./assets/setinha.png"/>
            </Arrow>
        </QuestionCard>
    );
}

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