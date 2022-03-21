import styled from "styled-components";

export default function Home(props){
    const { setStartRecall, goal, setGoal } = props;

    return (
        <>
            <Logo>
                <img src="./assets/logo.png"  alt="logo"/>
                <Text>ZapRecall</Text>
            </Logo>
            <Start>
                <Input type="number" min="1" max="8" placeholder="Digite sua meta de zaps..." onChange={e => setGoal(e.target.value)}></Input>
                <StartButton className={goal === '' ? "disabled" : "enabled"} onClick={() => setStartRecall('deck')}>Iniciar Recall!</StartButton>
            </Start>
        </>
    ); 
}

const Logo = styled.div`
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
