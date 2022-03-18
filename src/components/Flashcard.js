import styled from "styled-components";
import { useState } from "react";

export default function Flashcard(props) {
    const { cardNumber, question, answer } = props;

    const [content, setContent] = useState('title');


    if(content === 'title'){ 
        return (
            <Card onClick={() => setContent('question')}>
                <Text className="title">Pergunta {cardNumber}</Text>
                <img src="./assets/go.png"/>
            </Card>
        );
    }else if (content === 'question'){
        return (
            <QuestionCard>
                <Text>{question}</Text>
                <Arrow onClick={() => setContent('answer')}>
                    <img src="./assets/setinha.png"/>
                </Arrow>
            </QuestionCard>
        );
    }else if (content === 'answer'){
        return (
            <AnswerCard>
                <Text>{answer}</Text>
                <ButtonsBox>   
                    <Button className="red-button">Não lembrei</Button>
                    <Button className="yellow-button">Quase não lembrei</Button>
                    <Button className="green-button">Zap!</Button>
                </ButtonsBox>
            </AnswerCard>
        );
    }
}



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
    border: none;
    cursor: pointer;

    font-family: 'Recursive', sans-serif;
    color: #fff;
    font-weight: 400;
    font-size: 7px;
    line-height: 8px;
`
