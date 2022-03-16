import styled from "styled-components";

export default function Home(){
    return (
        <>
            <img src="./assets/logo.png" />
            <img src="./assets/logo-name.png" />
            <StartButton>Iniciar Recall!</StartButton>
        </>
    );
}

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

