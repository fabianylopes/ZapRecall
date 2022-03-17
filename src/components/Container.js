import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import Deck from "./Deck";


export default function Container(){
    return (
        <>
            <Header/>
            <Deck/>
            <Footer/>
        </>
    );
}

// const Box = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
// `
