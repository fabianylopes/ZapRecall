import styled from "styled-components";

export default function Footer(props){
    const { currentQuestion, totalQuestions, outcome, footerIcon } = props;
    
    if (outcome === 'default'){
        return (
            <FooterBar className="footer">    
                {currentQuestion}/{totalQuestions} CONCLUÍDOS
                <Icons>
                    {footerIcon.map((status) => (<AddFooterIcon status={status} />))}
                </Icons>
            </FooterBar>
        );
    }else if (outcome === 'success'){
        return (
            <FooterBar className="end-footer">
                🥳 PARABÉNS!
                <Text>Você não esqueceu de <br/>nenhum flashcard!</Text>
                {currentQuestion}/{totalQuestions} CONCLUÍDOS
                <Icons>
                    {footerIcon.map((status) => (<AddFooterIcon status={status} />))}
                </Icons>
            </FooterBar>
        );
    }else if (outcome === 'failure'){
        return (
            <FooterBar className="end-footer">
                😥 PUTZ!
                <Text>Ainda faltaram alguns... <br/>Mas não desanime!</Text>
                {currentQuestion}/{totalQuestions} CONCLUÍDOS
                <Icons>
                    {footerIcon.map((status) => (<AddFooterIcon status={status} />))}
                </Icons>
            </FooterBar>
        );
    }
}

function AddFooterIcon({ status }){
    return <img src={`./assets/${status}.png`} alt="icone"/>;
}

const FooterBar = styled.div`
    width: 100vw;
    padding: 15px 65px 10px 65px;
    background-color: #fff;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

const Icons = styled.div`
    display: flex;
    img {
        width: 23px;
        margin: 5px;
    }
`

const Text = styled.h2`
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
`
