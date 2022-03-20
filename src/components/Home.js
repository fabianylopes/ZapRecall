import styled from "styled-components";

export default function Home({ setStartRecall }){
    return (
        <>
            <Logo>
                <img src="./assets/logo.png"  alt="logo"/>
                <Text>ZapRecall</Text>
            </Logo>
            <StartButton onClick={() => setStartRecall('deck')}>Iniciar Recall!</StartButton>
        </>
    );
}

const Logo = styled.div`
    margin-top: 148px;
    margin-bottom: 74px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`

const Text = styled.h1`
    font-family: 'Righteous', cursive;
    color: #fff;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
`

const StartButton = styled.button`
    width: 246px;
    height: 54px;
    background-color: #fff;
    color: #D70900;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    font-family: 'Recursive', sans-serif;
    text-align: center;
    border-radius: 5px;
    border: 1px solid #D70900;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    cursor: pointer;
`
