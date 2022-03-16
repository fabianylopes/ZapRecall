import styled from "styled-components";

export default function Question(){
    return (
        <QuestionCard>
            <Text>O que é JSX?</Text>
            <div className="arrow">
                <img src="./assets/setinha.png"/>
            </div>
        </QuestionCard>
    );
}

const QuestionCard = styled.div`
    width: 182px;
    height: 80px;
    background-color: #fff;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
`

const Text = styled.h1`
    color: #333333;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
`