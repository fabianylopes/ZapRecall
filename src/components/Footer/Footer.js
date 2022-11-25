import { FooterBar, Icons, Text, RestartButton } from "./style";

let titleFooter = "";
let textFooter = "";

export default function Footer(props) {
  const {
    currentQuestion,
    totalQuestions,
    outcome,
    footerIcon,
    setStartRecall,
    setCurrentQuestion,
    setFooterIcon,
    shuffleObject,
    setGoal,
  } = props;

  if (outcome === "default") {
    return (
      <FooterBar className="footer">
        {currentQuestion}/{totalQuestions} CONCLUÍDOS
        <Icons>
          {footerIcon.map((status, index) => (
            <AddFooterIcon key={index} status={status} />
          ))}
        </Icons>
      </FooterBar>
    );
  } else if (outcome === "failure") {
    titleFooter = "😥 PUTZ!";
    textFooter = "Ainda faltaram alguns... Mas não desanime!";

    return (
      <FinalResult
        currentQuestion={currentQuestion}
        totalQuestions={totalQuestions}
        footerIcon={footerIcon}
        restart={restart}
        titleFooter={titleFooter}
        textFooter={textFooter}
      />
    );
  } else if (outcome === "success") {
    titleFooter = "🥳 PARABÉNS!";
    textFooter = "Você atingiu sua meta de zaps!";

    return (
      <FinalResult
        currentQuestion={currentQuestion}
        totalQuestions={totalQuestions}
        footerIcon={footerIcon}
        restart={restart}
        titleFooter={titleFooter}
        textFooter={textFooter}
      />
    );
  }

  function restart() {
    setCurrentQuestion(0);
    setFooterIcon([]);
    setGoal("");
    shuffleObject();
    setStartRecall("home");
  }
}

function FinalResult({ currentQuestion, totalQuestions, footerIcon, restart }) {
  return (
    <FooterBar className="end-footer">
      <h3 className="bold">{titleFooter}</h3>
      <Text>{textFooter}</Text>
      {currentQuestion}/{totalQuestions} CONCLUÍDOS
      <Icons>
        {footerIcon.map((status, i) => (
          <AddFooterIcon key={i} status={status} />
        ))}
      </Icons>
      <RestartButton onClick={restart}>REINICIAR RECALL</RestartButton>
    </FooterBar>
  );
}

function AddFooterIcon({ status }) {
  return <img src={status} alt="icone" />;
}
