import styled from "styled-components";
import Logo from "../assets/small-logo.png";

export default function Header(){
    return (
        <Top>
            <img src={Logo} alt="logo"/>
            <Text>ZapRecall</Text>
        </Top>
    );
}

const Top = styled.div`
    background-color: #FB6B6B;
    width: 100vw;
    height: 140px;
    padding: 22px 38px;

    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
`

const Text = styled.h1`
    font-family: 'Righteous', cursive;
    color: #fff;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    margin-left: 10px;
`
