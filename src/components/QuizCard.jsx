import React, { useState, useEffect } from "react";
import "./QuizCard.css";
import background from "../assets/background.jpg";

const QuizCard = (props) => {
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    setSelectedOption(null);
  }, [props.question]);

  function handleClick(option) {
    setSelectedOption(option);

    // Tell App which answer the user selected
    props.handleAnswer(option);
  }

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPositionX: "10%",
        backgroundPositionY: "10%",
      }}
      className="min-h-screen w-full flex justify-center items-center p-4 sm:p-6"
    >
      <div className="relative w-full max-w-3xl">

        <div className="absolute -inset-1 bg-yellow-700 blur-sm rounded-3xl"></div>

        <div
          className="
            relative
            bg-yellow-400/90
            rounded-3xl
            p-6 sm:p-8 md:p-10
          "
        >

          {/* Header */}
          <div className="flex justify-between items-center mb-6">

            <span className="text-sm font-semibold text-white px-4 py-2 rounded-full">
              Question {props.id}
            </span>

            <span className="text-sm font-medium text-black/60">
              Score: {props.score}
            </span>

          </div>

          {/* Question */}
          <h1
            className="
              text-xl
              sm:text-2xl
              md:text-3xl
              font-bold
              text-black
              leading-tight
              mb-8
            "
          >
            {props.question}
          </h1>

          {/* Options */}
          <div className="flex flex-col gap-3">

            {props.options.map((option, index) => {

              let buttonStyle =
                "bg-white/30 border-black/30 hover:bg-white/60";

              // Correct answer
              if (
                selectedOption !== null &&
                option === props.correctAnswer
              ) {
                buttonStyle =
                  "bg-green-500 text-white border-green-700";
              }

              // Wrong selected answer
              else if (
                selectedOption !== null &&
                option === selectedOption
              ) {
                buttonStyle =
                  "bg-red-500 text-white border-red-700";
              }

              return (
                <button
                  key={index}
                  onClick={() => handleClick(option)}
                  disabled={selectedOption !== null}
                  className={`
                    w-full
                    text-left
                    px-5 py-4
                    rounded-xl
                    border-2
                    font-medium
                    transition-all
                    duration-200
                    ${buttonStyle}

                    ${
                      selectedOption === null
                        ? "hover:-translate-y-0.5 hover:shadow-md cursor-pointer"
                        : "cursor-default"
                    }
                  `}
                >
                  <span className="mr-3 font-bold opacity-60">
                    {String.fromCharCode(65 + index)}.
                  </span>

                  {option}
                </button>
              );
            })}

          </div>

          {/* Buttons */}
          <div className="flex flex-col-reverse gap-3 mt-8 sm:flex-row sm:justify-between sm:items-center">

            <button
              onClick={props.nextQuestion}
              className="
                w-full px-6 py-3
                sm:w-auto
                rounded-xl
                text-white
                font-semibold
                border-2 border-black
                hover:bg-transparent
                hover:text-black
                transition-all
                duration-300
                cursor-pointer
              "
            >
              Next →
            </button>

            <button
              onClick={props.restartQuiz}
              className="
                w-full px-5 py-3
                sm:w-auto
                rounded-xl
                border-2 border-black
                font-semibold
                hover:bg-black
                hover:text-white
                transition-all
                duration-300
                cursor-pointer
              "
            >
              Restart
            </button>

          </div>

        </div>
      </div>
    </div>
  );
};

export default QuizCard;