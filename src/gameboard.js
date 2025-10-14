import { ships } from './ships';

export function gameboard() {
  const board = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  const shipsOnBoard = [];

  function getBoard() {
    return board;
  }

  function placeShip(ship, coordinates) {
    coordinates.forEach((coordinate) => {
      board[coordinate[0]][coordinate[1]] = 1;
    });

    ship['boardCoordinates'] = coordinates;
    shipsOnBoard.push(ship);
  }

  function receiveAttack(coordinates) {
    for (let i = 0; i < shipsOnBoard.length; i++) {
      if (
        shipsOnBoard[i].boardCoordinates.some(
          (arr) =>
            arr.length === coordinates.length &&
            arr.every((elem, i) => elem === coordinates[i]),
        )
      ) {
        shipsOnBoard[i].hit();
      } else {
        board[coordinates[0]][coordinates[1]] = 'M';
      }
    }
  }

  function areAllShipsSunk() {
    let index = 0;
    while (index < shipsOnBoard.length) {
      if (shipsOnBoard[index++].isSunk() === false) {
        return false;
      }
    }
    return true;
  }

  return {
    getBoard,
    placeShip,
    receiveAttack,
    areAllShipsSunk,
    shipsOnBoard,
  };
}
