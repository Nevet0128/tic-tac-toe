import { WINNER_COMBOS } from "../constants";

const CheckWinner = (updatedBoard) => {
  for (const combo of WINNER_COMBOS) {
    let [a, b, c] = combo;

    if (
      updatedBoard[a] &&
      updatedBoard[a] === updatedBoard[b] &&
      updatedBoard[a] === updatedBoard[c]
    ) {
      return updatedBoard[a];
    }
  }

  //Verificar si hay empate
  let count = 0;

  updatedBoard.forEach((el) => {
    if (el) count += 1;
  });

  if (count == 9) {
    return false;
  }

  /* if (updatedBoard.every((square) => square !== null)) {
      return false;
    } */
};

export default CheckWinner;
