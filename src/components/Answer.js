import styled from "styled-components";

export default function Answer(){
    return (
        <AnswerCard>
            <Text>JSX é uma sintaxe para escrever HTML dentro do JS</Text>
            <ButtonsBox>   
                <Button>Não lembrei</Button>
                <Button>Quase não lembrei</Button>
                <Button>Zap!</Button>
            </ButtonsBox>
        </AnswerCard>
    );
}

const AnswerCard = styled.div`
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

const ButtonsBox = styled.div`

`

const Button = styled.button`
    width: 55px;
    height: 24px;
    border-radius: 5px;
`
