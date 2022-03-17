import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import Flashcards from "./Flashcards";


export default function Container(){
    return (
        <>
            <Header/>
            <Flashcards/>
            <Footer/>
        </>
    );
}

// const Box = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
// `
