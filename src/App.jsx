import { useState } from "react";
import "./css/App.css";
import Square from "./components/Square";
import CheckWinner from "./logic/CheckWinner";
import { TURNS } from "./constants.js";
import WinnerModal from "./components/WinnerModal";

export function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem("board");

    if (boardFromStorage) return JSON.parse(boardFromStorage);

    return Array(9).fill(null);
  });
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem("turn");

    if (turnFromStorage) return turnFromStorage;

    return TURNS.X;
  });
  //false = hay empate
  const [winner, setWinner] = useState(null);

  const resetBoard = () => {
    //buenas prácticas: no modificar los parámetros
    const newBoard = Array(9).fill(null);
    setBoard(newBoard);
    setTurn(TURNS.X);
    setWinner(null);
    //Bugfix de devolver la partida al resetear el juego y después recargar la página
    window.localStorage.removeItem("board");
    window.localStorage.removeItem("turn");
  };

  const updateBoard = (index) => {
    //Sí != 'null' board[index], no hacer nada
    //Se añadió winner para no poner jugar más en caso de ganador
    if (board[index] || winner) return;

    //buenas prácticas: no modificar los parámetros
    //¿operador rest entre corchetes para dar a entender que se recibirá a 'board' como arreglo?
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    //cambiar de turno --BUENAS PRÁCTICAS--
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    //Guardando la partida un movimiento antes
    window.localStorage.setItem("board", JSON.stringify(newBoard));
    window.localStorage.setItem("turn", newTurn);

    let isWinner = CheckWinner(newBoard);

    if (isWinner || isWinner === false) {
      //poner un cuadro que no afecte al documento y que esté oculto para que se muestre cuando entre en el condicional
      setWinner(isWinner);
      //LOS ESTADOS SON ASÍNCRONOS, por eso se muestra el 'alert' antes de que se dibuje la Square
      //window.alert("ha ganado " + isWinner);
    }
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

      <WinnerModal winner={winner} resetBoard={resetBoard} />
    </main>
  );
}
