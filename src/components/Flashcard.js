import styled from "styled-components";
import { useState } from "react";



export default function Flashcard(props) {
    const { cardNumber, question, answer, currentQuestion, setCurrentQuestion, setOutcome, setFooterIcon } = props;

    const [content, setContent] = useState('title');
    const [result, setResult] = useState('');
    const [icon, setIcon] = useState('go');
    

    if(content === 'title'){ 
        return (
            <Card onClick={() => setContent('question')}>
                <Text className={`"title" ${result}`}>Pergunta {cardNumber}</Text>
                <img src={`./assets/${icon}.png`}/>
            </Card>
        );
    }else if (content === 'question'){
        return (
            <QuestionCard>
                <Text>{question}</Text>
                <Arrow onClick={() => setContent('answer')}>
                    <img src="./assets/arrow.png"/>
                </Arrow>
            </QuestionCard>
        );
    }else if (content === 'answer'){
        return (
            <AnswerCard>
                <Text>{answer}</Text>
                <ButtonsBox>   
                    <Button className="red-button" onClick={() => answered('wrong')}>Não lembrei</Button>
                    <Button className="yellow-button" onClick={() => answered('almost')}>Quase não lembrei</Button>
                    <Button className="green-button" onClick={() => answered('zap')}>Zap!</Button>
                </ButtonsBox>
            </AnswerCard>
        );
    }

    

    function answered(status){
        setContent('title');
        setResult(status);
        setIcon(status);
        setCurrentQuestion(currentQuestion + 1);
        setFooterIcon(status);
       
                
        if(currentQuestion === 8){
            setOutcome('success');
        }
    }
    
}

const Card = styled.div`
    width: 300px;
    height: 65px;
    border-radius: 5px;
    margin-bottom: 25px;
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
    width: 300px;
    height: 130px;
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
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
`

const Arrow = styled.div`
    cursor: pointer;

    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
`

const AnswerCard = styled.div`
    width: 300px;
    height: 130px;
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
    width: 85px;
    height: 37px;
    border-radius: 5px;
    border: none;
    cursor: pointer;

    font-family: 'Recursive', sans-serif;
    color: #fff;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
`