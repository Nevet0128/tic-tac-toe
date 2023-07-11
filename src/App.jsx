import { useState } from "react";
import "./App.css";

const TURNS = {
  X: "x",
  O: "o",
};

//Creación del nuevo componente: Cuadrado que conforma el gato
//parámetros:
//'children': para mostrar la X / O
//'updateBoard': para actualizar el tablero ---CAMBIADO---
//'index': para saber la posición del cuadro donde se hizo click
// eslint-disable-next-line react/prop-types
const Square = ({ children, updateBoard, index }) => {
  const handleClick = () => {
    updateBoard(index);
  };

  return (
    <div className="square" onClick={handleClick}>
      {children}
    </div>
  );
};

function App() {
  //Para poder guardar el avance del juego se deben de usar un estado
  const [board, setBoard] = useState(Array(9).fill(null)); //El estado inicial se da por board
  // mientras que la función para actualizar el tablero se llamará setBoard

  //Estado para los turnos
  const [turn, setTurn] = useState(TURNS.X);

  const updateBoard = (index) => {
    //Sí ya tienen algo esa casilla, no hacer nada
    if (board[index]) return;

    //buenas prácticas: no modificar los parámetros
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X; // para que se actualice de quién es el turno
    setTurn(newTurn); // se llama al ESTADO para que cambie el vlaor inicial
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
      </section>
    </main>
  );
}

export default App;
