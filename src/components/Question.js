import styled from "styled-components";

export default function Question(){
    return (
        <QuestionCard>
            <Text>O que é JSX?</Text>
            <Arrow>
                <img src="./assets/setinha.png"/>
            </Arrow>
        </QuestionCard>
    );
}

const QuestionCard = styled.div`
    width: 340px;
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
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
`