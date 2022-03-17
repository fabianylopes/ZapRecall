import styled from "styled-components";

export default function Header(){
    return (
        <Top>
            <img src="./assets/logo-pequeno.png"/>
            <Text>ZapRecall</Text>
        </Top>
    );
}

const Top = styled.div`
    padding: 22px 38px;

    display: flex;
    justify-content: center;
`

const Text = styled.h1`
    font-family: 'Righteous', cursive;
    color: #fff;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    margin-left: 5px;
`
