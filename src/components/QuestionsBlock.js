import styled from "styled-components";

export default function QuestionsBlock(){
    return (
        <Question>
            <Text>Pergunta 1</Text>
            <img src="./assets/go.png"/>
        </Question>
    );
}

const Question = styled.div`
    width: 340px;
    height: 55px;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    padding-right: 16px;
    padding-left: 14px;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
        height: 22px;
    }
`

const Text = styled.p`
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
`
