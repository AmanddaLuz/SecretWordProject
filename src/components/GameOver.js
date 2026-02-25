import "./GameOver.css";

const GameOver = ({ retry }) => {
  return (
    <div className="gameover">
      <h1>Fim de jogo!</h1>
      <h2>
        A sua pontuação foi: <span>000</span>!
      </h2>
      <button onClick={retry}>Reiniciar</button>
    </div>
  );
};

export default GameOver;
