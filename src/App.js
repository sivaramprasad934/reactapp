import React, { useState } from 'react';
import questions from './questions';
import './App.css';

function App() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showScore, setShowScore] = useState(false);

  const handleOptionClick = (index) => {
    setSelected(index);
    if (index === questions[current].answer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    setSelected(null);
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrent(0);
    setScore(0);
    setSelected(null);
    setShowScore(false);
  };

  return (
    <div className="quiz-container">
      <h1>React MCQ Quiz</h1>
      {showScore ? (
        <div className="score-section">
          <h2>Your Score: {score} / {questions.length}</h2>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <>
          <div className="question-count">
            Question {current + 1} / {questions.length}
          </div>
          <div className="question-text">{questions[current].question}</div>
          <div className="options">
            {questions[current].options.map((option, index) => (
              <button
                key={index}
className={`option-button ${selected === index ? (index === questions[current].answer ? 'correct' : 'wrong') : ''}`}
                onClick={() => handleOptionClick(index)}
                disabled={selected !== null}
              >
                {option}
              </button>
            ))}
          </div>
          {selected !== null && (
            <button className="next-button" onClick={handleNext}>
              {current + 1 === questions.length ? "Finish Quiz" : "Next"}
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default App;
