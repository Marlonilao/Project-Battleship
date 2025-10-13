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
    for (const ship of shipsOnBoard) {
      if (
        ship.boardCoordinates.some(
          (arr) => arr[0] === coordinates[0] && arr[1] === coordinates[1],
        )
      ) {
        return ship.hit();
      } else {
        board[coordinates[0]][coordinates[1]] = 'M';
        return 'MISS';
      }
    }
  }

  return {
    getBoard,
    placeShip,
    receiveAttack,
  };
}
