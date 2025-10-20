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
    let index = 0;
    while (index < 10) {
      if (
        shipsOnBoard[index].boardCoordinates.some(
          (arr) => arr[0] === coordinates[0] && arr[1] === coordinates[1],
        )
      ) {
        board[coordinates[0]][coordinates[1]] = 'X';
        shipsOnBoard[index].hit();
        return 'HIT';
      }
      index++;
    }
    board[coordinates[0]][coordinates[1]] = 'M';
    return 'MISS';
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
