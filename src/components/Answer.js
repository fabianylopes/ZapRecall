import styled from "styled-components";

export default function Answer(){
    return (
        <AnswerCard>
            <Text>JSX é uma sintaxe para <br/>escrever HTML dentro do JS</Text>
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
    padding: 13px 4px 3px 4px;
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

const ButtonsBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Button = styled.button`
    width: 55px;
    height: 24px;
    border-radius: 5px;
    background-color: #FF3030;
    border: none;
    cursor: pointer;

    font-family: 'Recursive', sans-serif;
    color: #fff;
    font-weight: 400;
    font-size: 7px;
    line-height: 8px;
    
`
