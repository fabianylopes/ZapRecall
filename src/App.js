import Answer from "./components/Answer";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Question from "./components/Question";
import QuestionsBlock from "./components/QuestionsBlock";

export default function App(){
    return (
        <>
            {/* <Home/> */}
            <Header/>
            {/* <QuestionsBlock/> */}
            <Question/>
            <Answer/>
            <Footer/>
        </>
    );
}
