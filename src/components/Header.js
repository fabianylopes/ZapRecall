import styled from "styled-components";

export default function Header(){
    return (
        <Top>
            <img src="./assets/logo-pequeno.png"/>
        </Top>
    );
}

const Top = styled.div`
    padding: 22px 38px;

    display: flex;
    justify-content: center;
`