import React, { useState } from "react";
import "./index.css";

function App() {
  const questions = [
    {
      title: "Скільки мені років?",
      variants: ["16", "17", "18"],
      correct: 2,
    },
    {
      title: "Чи маю я дівчину?",
      variants: ["Так", "Ні", "Маю хлопця"],
      correct: 0,
    },
    {
      title: "Який мій гороскоп?",
      variants: ["Риби", "Діва", "Рак"],
      correct: 1,
    },
    {
      title: "Де я навчаюсь?",
      variants: ["ВНТУ", "ДонНУ", "КТК"],
      correct: 0,
    },
    {
      title: "Чи є у мене домашні тварини?",
      variants: ["Так", "Ні", "Не знаю"],
      correct: 0,
    },
  ];

  const [step, setStep] = useState(0);
  const [correctVariant, setCorrectVariant] = useState(0);
  const question = questions[step];

  function Game({ step, question, onClickVariant }) {
    const percentage = Math.round((step / questions.length) * 100);
    return (
      <div className="quest">
        <div className="progress">
          <div
            style={{ width: `${percentage}%` }}
            className="progressBar"
          ></div>
          <h1>{question.title}</h1>
          <ul>
            {question.variants.map((text, index) => (
              <li key={index} onClick={() => onClickVariant(index)}>
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  function ResultGame({ correctVariant }) {
    return (
      <>
        <div className="result">
          <img src="image.jpg" className="image" />
          <h2>
            Відповіли на {correctVariant} з {questions.length}
          </h2>
          <a href="/">
            <button className="retry">Спробувати знову</button>
          </a>
        </div>
      </>
    );
  }

  const onClickVariant = (index) => {
    console.log(step, index);
    setStep(step + 1);
    if (index === question.correct) {
      setCorrectVariant(correctVariant + 1);
    }
  };

  return (
    <div className="container">
      {step !== questions.length ? (
        <Game step={step} question={question} onClickVariant={onClickVariant} />
      ) : (
        <ResultGame correctVariant={correctVariant} />
      )}
    </div>
  );
}

export default App;
