import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import QuestionsBlock from "./QuestionsBlock";


export default function Container(){
    return (
        <>
            <Header/>
            <QuestionsBlock/>
            <Footer/>
        </>
    );
}

// const Box = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
// `
