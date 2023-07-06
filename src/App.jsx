import "./App.css";

const TURNS = {
  X: "x",
  O: "o",
};

//Creación del nuevo componente: Cuadrado que conforma el gato
//parámetros:
//'children' para mostrar la X / O
//'updateSquare': para actualizar el tablero
//'index' para saber la posición del cuadro donde se hizo click
const Square = ({ children, updateSquare, index }) => {
  return <div className="square">{children}</div>;
};

function App() {
  //necesario tenerlo dentro del componente para guardar los estados del tablero
  const board = Array(9).fill(null); //array  de 9 posiciones llenado con null

  return (
    <main className="board">
      <h1>Juego del gato</h1>
      <section className="game">
        {board.map((_, index) => {
          return (
            <Square
              key={index} //identificador único que se renderiza de una lista
              //CON LA EXTENSIÓN DE REACT EN CHROME SE PUEDEN VER LOS COMPONENTES CON SU KEY
              index={index} // para pasar por parámetro a Square
            ></Square>
          );
        })}
      </section>
    </main>
  );
}

export default App;
