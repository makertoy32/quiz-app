import { useState } from "react";
import quest from "./questions/question.js";
import QuizCard from "./components/QuizCard.jsx";
import "./App.css";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  function nextQuestion() {
    if (currentQuestion >= quest.length - 1) {
      alert(`Quiz finished! Your score is ${score}/${quest.length}`);
      return;
    }

    setCurrentQuestion((prev) => prev + 1);
  }

  function handleAnswer(option) {
    if (option === quest[currentQuestion].correctAnswer) {
      setScore((prev) => prev + 1);
    }
  }

  function restartQuiz() {
    setCurrentQuestion(0);
    setScore(0);
  }

  return (
    <>
      <QuizCard
        question={quest[currentQuestion].question}
        options={quest[currentQuestion].options}
        correctAnswer={quest[currentQuestion].correctAnswer}
        id={quest[currentQuestion].id}
        nextQuestion={nextQuestion}
        restartQuiz={restartQuiz}
        handleAnswer={handleAnswer}
        score={score}
      />
    </>
  );
}

export default App;