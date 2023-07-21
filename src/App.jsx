import { useState } from "react";
import "./css/App.css";
import Square from "./components/Square";

const TURNS = {
  X: "×",
  O: "░",
};

const COMBO_WINNER = [
  //HORIZONTAL
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  //DIAGONAL
  [0, 4, 8],
  [2, 4, 6],
  //VERTICAL
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));

  const [turn, setTurn] = useState(TURNS.X);

  //false = hay empate
  const [winner, setWinner] = useState(null);

  const updateBoard = (index) => {
    //Sí ya tienen algo esa casilla, no hacer nada
    //Se apoya en que todas las casillas empiezan en 'null'
    if (board[index]) return;

    //buenas prácticas: no modificar los parámetros
    //¿operador rest entre corchetes para dar a entender que 'board' es un arreglo?
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    //cambiar de turno --BUENAS PRÁCTICAS--
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
  };

  const resetBoard = () => {
    //buenas prácticas: no modificar los parámetros
    const newBoard = Array(9).fill(null);
    setBoard(newBoard);
    setTurn(TURNS.X);
  };

  const endGame = () => {
    //game is tied
    board.forEach((square) => (square ? true : false)); //return implícito en arrow functions
  };

  return (
    <main className="board">
      <h1>Juego del gato</h1>
      <section className="game">
        {board.map((_, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {board[index]}
            </Square>
          );
        })}
      </section>

      <section className="turn">
        <h2>Turno</h2>
        <Square>{turn === TURNS.X ? TURNS.X : TURNS.O}</Square>
        <button onClick={resetBoard}>RESET GAME</button>
      </section>
    </main>
  );
}

export default App;
