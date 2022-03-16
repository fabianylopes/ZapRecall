import styled from "styled-components";

export default function Home(){
    return (
        <Container>
            <Logo>
                <img src="./assets/logo.png" />
                <img src="./assets/logo-name.png" />
            </Logo>
            <StartButton>Iniciar Recall!</StartButton>
        </Container>
    );
}

const Container = styled.div`
    padding: 90px 30px;
`

const Logo = styled.div`
    margin-bottom: 74px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`

const StartButton = styled.button`
    width: 141px;
    height: 31px;
    background-color: #fff;
    color: #D70900;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    font-family: 'Recursive', sans-serif;
    text-align: center;
    border-radius: 5px;
    border: 1px solid #D70900;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    cursor: pointer;
`

