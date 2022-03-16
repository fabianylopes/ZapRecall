import styled from "styled-components";
import Answer from "./Answer";
import Question from "./Question";

export default function QuestionsBlock(){
    return (
        <Cards>
            <Answer/>
            <Card>
                <Text>Pergunta 1</Text>
                <img src="./assets/go.png"/>
            </Card>
            <Card>
                <Text>Pergunta 1</Text>
                <img src="./assets/go.png"/>
            </Card>
            <Card>
                <Text>Pergunta 1</Text>
                <img src="./assets/go.png"/>
            </Card>
                {/* <img src="./assets/x.png"/>
                <img src="./assets/almost.png"/>
            <img src="./assets/check.png"/> */}
        </Cards>
    );
}

const Cards = styled.div`

`

const Card = styled.div`
    width: 340px;
    height: 55px;
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
    font-size: 17px;
    line-height: 20px;
    //text-decoration-line: line-through;
`
