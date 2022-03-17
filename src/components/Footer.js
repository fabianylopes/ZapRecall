import styled from "styled-components";
import { questions } from './Deck';

export default function Footer(){
    return (
        <FooterBar>    
            {questions[0].deck - 1}/{questions.length} CONCLUÍDOS

            {/* <Icons>
                <img src="./assets/x.png"/>
                <img src="./assets/almost.png"/>
                <img src="./assets/check.png"/>
            </Icons> */}
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

`


