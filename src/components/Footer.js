import styled from "styled-components";

export default function Footer(){
    return (
        <FooterBar>    
            0/4 CONCLUÍDOS

            {/* <Result>
                <Status>
                    <img src="./assets/party.png"/>
                    PARABÉNS!
                    <Text>Você não esqueceu de nenhum flashcard!</Text>
                </Status>
            </Result> */}

            {/* <Result>
                <Status>
                    <img src="./assets/sad.png"/>
                    PUTZ!
                    <Text>Ainda faltaram alguns... Mas não desanime!</Text>
                </Status>
            </Result>

            <Icons>
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

const Status = styled.div`

`

const Text = styled.h1`

`

const Result = styled.div`

`
