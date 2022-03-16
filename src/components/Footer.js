import styled from "styled-components";

export default function Footer(){
    return (
        <FooterBar>0/4 CONCLUÍDOS</FooterBar>
    );
}

const FooterBar = styled.h1`
    width: 100vw;
    height: 75px;
    background-color: #fff;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    position: fixed;
    bottom: 0;

    display: flex;
    justify-content: center;
    align-items: center;
`
