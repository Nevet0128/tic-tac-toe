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
const Square = ({ children, updateBoard, index }) => {
  const handleClick = () => {
    updateBoard();
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
  const [turn, setTurn] = useState(TURNS.X); //El juego lo empieza las X

  /*Encargado de todo lo que pasa en el juego
    -De ver si hay ganador
    -De actualizar el tablero
    -Ver de quién es el turno
  */
  const updateBoard = () => {
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X; // para que se actualice de quién es el turno
    setTurn(newTurn); // se llama al ESTADO para que cambie el vlaor inicial
    console.log(turn);
  };

  return (
    <main className="board">
      <h1>Juego del gato</h1>
      <section className="game">
        {/*updateBoard se pasa así para que sólo se active cuando se haga click */}
        {board.map((_, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {board[index]}
            </Square>
          );
        })}
      </section>

      {/*Sección para mostrar gráficamente de quién es el turno USANSO EL ESTADO
      
        Propósito de REACT: cambiar visualmente un componente a través del estado de el componente padre
      */}
      <section className="turn">
        <h2>Turno</h2>
        <Square>{turn === TURNS.X ? TURNS.X : TURNS.O}</Square>
      </section>
    </main>
  );
}

export default App;
