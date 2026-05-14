import './Score.css'

const Score = ({score, onIncrement, onDecrement}) => {

  return (
    <div className="scores-ctn">
      <button onClick={onIncrement}>+</button>
      <span>{score}</span>
      <button onClick={onDecrement}>
        -
      </button>
    </div>
  );
};

export default Score;
