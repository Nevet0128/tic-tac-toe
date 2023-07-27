const SetTurn = ({ turn, ResetBoard }) => {
  return (
    <section className="turn">
      <h2>Turno</h2>
      <Square>{turn === TURNS.X ? TURNS.X : TURNS.O}</Square>
      <button onClick={ResetBoard}>RESET GAME</button>
    </section>
  );
};

export default SetTurn;
