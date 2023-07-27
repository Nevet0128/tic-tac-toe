const WinnerModal = ({ winner, resetBoard }) => {
  if (winner === null) return null;

  let winnerText = winner === false ? "Empate" : `Ha ganado ${winner}`;

  return (
    <div className="winner">
      <p className="text">{winnerText}</p>
      <button onClick={resetBoard} className="win">
        RESET GAME
      </button>
    </div>
  );
};

export default WinnerModal;
