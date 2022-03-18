import styled from "styled-components";
import { useState } from "react";

export default function Footer({ currentQuestion, totalQuestions }){

    //const [outcome, setOutcome] = useState('default');

    return (
        <FooterBar>    
            {currentQuestion}/{totalQuestions} CONCLUÍDOS
            <Icons>
                <img src={`./assets/zap.png`}/>
            </Icons>
        </FooterBar>
    );
}

const FooterBar = styled.h1`
    width: 100vw;
    height: 75px;
    background-color: #fff;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Icons = styled.div`
    display: flex;
    img {
        margin: 3px;
    }
`
