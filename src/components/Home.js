import styled from "styled-components";
import Logo from "../assets/big-logo.png";
import { useState } from "react";

export default function Home(props){
    const { setStartRecall, goal, setGoal } = props;

    const [disabled, setDisabled] = useState(true);

    return (
        <>
            <LogoBox>
                <img src={Logo}  alt="logo"/>
                <Text>ZapRecall</Text>
            </LogoBox>
            <Start>
                <Input type="number" min="1" max="8" placeholder="Digite sua meta de zaps..." onChange={e => handleButton(e)}></Input>
                <StartButton disabled={disabled} className={(goal > 0 && goal <= 8) ? "enabled" : "disabled"} onClick={() => setStartRecall('deck')}>Iniciar Recall!</StartButton>
            </Start>
        </>
    ); 

    function handleButton(e){
        let goal = e.target.value;
        setGoal(e.target.value)
        
        if(goal > 0 && goal <= 8){
            setDisabled(false);
        }
    }
}

const LogoBox = styled.div`
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

const Start = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 18px;
`

const Input = styled.input`
    width: 246px;
    height: 43px;
    background-color: #fff;
    color: #FB6B6B;
    padding-left: 10px;
    border-radius: 5px;
    border: none;
    outline: none;
    ::placeholder {
        color: #ADADAD;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
    }
`

const StartButton = styled.button`
    width: 246px;
    height: 54px;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    font-family: 'Recursive', sans-serif;
    text-align: center;
    border-radius: 5px;
`
