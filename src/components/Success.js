import styled from "styled-components";

export default function Success(){
    return (
        <Result>
            <Status>
                <img src="./assets/party.png"/>
                PARABÉNS!
                <Text>Você não esqueceu de nenhum flashcard!</Text>
            </Status>
        </Result>
    );
}

const Result = styled.div`

`

const Status = styled.div`

`

const Text = styled.h1`

`
