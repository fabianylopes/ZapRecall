import styled from "styled-components";

export default function Footer(props){
    const { currentQuestion, totalQuestions, outcome, footerIcon, setStartRecall, setCurrentQuestion, setFooterIcon, shuffleObject, setGoal } = props;
    
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
                <h3 className="bold">🥳 PARABÉNS!</h3>
                <Text>Você atingiu sua meta de zaps!</Text>
                {currentQuestion}/{totalQuestions} CONCLUÍDOS
                <Icons>
                    {footerIcon.map((status) => (<AddFooterIcon status={status} />))}
                </Icons>
                <RestartButton onClick={restart}>REINICIAR RECALL</RestartButton>
            </FooterBar>
        );
    }else if (outcome === 'failure'){
        return (
            <FooterBar className="end-footer">
                 <h3 className="bold">😥 PUTZ!</h3>
                <Text>Ainda faltaram alguns... <br/>Mas não desanime!</Text>
                {currentQuestion}/{totalQuestions} CONCLUÍDOS
                <Icons>
                    {footerIcon.map((status) => (<AddFooterIcon status={status} />))}
                </Icons>
                <RestartButton onClick={restart}>REINICIAR RECALL</RestartButton>
            </FooterBar>
        );
    }
    
    function restart(){
        setCurrentQuestion(0);
        setFooterIcon([]);
        setGoal(0);
        shuffleObject();
        setStartRecall('home');
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

const RestartButton = styled.button`
    width: 167px;
    height: 32px;
    background-color: #FB6B6B;
    color: #fff;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    font-family: 'Recursive', sans-serif;
    text-align: center;
    border-radius: 5px;
    border: none;
    cursor: pointer;
`
