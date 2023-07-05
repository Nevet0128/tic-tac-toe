import "./App.css";

const TURNS = {
  X: "x",
  O: "o",
};

const board = Array(9).fill(null); //array  de 9 posiciones llenado con null

function App() {
  return (
    <main className="board">
      <h1>Juego del gato</h1>
      <section className="game">
        {/*Se encierra con llaves al principio porque se 
        está evaluando las variables, siempre tiene que ser así */}
        {board.map((_, index) => {
          return (
            <div key={index}>
              <span>{index}</span>
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default App;
