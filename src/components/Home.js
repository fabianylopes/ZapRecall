import styled from "styled-components";
//import logo from "../../public/assets/logo.png";
//import { useState } from "react";

export default function Home({ setStartRecall }){
    return (
        <Container>
            <Logo>
                <img src="./assets/logo.png"/>
                <Text>ZapRecall</Text>
            </Logo>
            <StartButton onClick={() => setStartRecall('container')}>Iniciar Recall!</StartButton>
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

const Text = styled.h1`
    font-family: 'Righteous', cursive;
    color: #fff;
    font-weight: 400;
    font-size: 25px;
    line-height: 31px;
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

