import { useState } from "react";
import './Score.css'

const Score = () => {
  const [score, setScore] = useState(0);

  return (
    <div className="scores-ctn">
      <button onClick={() => setScore((prev) => prev + 1)}>+</button>
      <span>{score}</span>
      <button onClick={() => setScore((prev) => (score == 0 ? 0 : prev - 1))}>
        -
      </button>
    </div>
  );
};

export default Score;
