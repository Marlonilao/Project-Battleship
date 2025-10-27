import './stylesheet.css';
import { renderUserBoard, renderOpponentBoard, userTurnToAttack } from './dom';
import { gameboard } from './gameboard';
import { player } from './player';
import { ships } from './ships';
const user = player(gameboard());
const computer = player(gameboard(), 'computer');
const coordinates1 = [
  [[8, 1]],
  [[1, 5]],
  [[9, 6]],
  [[6, 8]],
  [
    [3, 7],
    [4, 7],
  ],
  [
    [8, 8],
    [9, 8],
  ],
  [
    [0, 9],
    [1, 9],
  ],
  [
    [3, 1],
    [4, 1],
    [5, 1],
  ],
  [
    [7, 3],
    [7, 4],
    [7, 5],
  ],
  [
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
  ],
];
const coordinates2 = [
  [[4, 4]],
  [[4, 6]],
  [[0, 6]],
  [[9, 8]],
  [
    [3, 1],
    [4, 1],
  ],
  [
    [6, 1],
    [7, 1],
  ],
  [
    [2, 9],
    [3, 9],
  ],
  [
    [6, 5],
    [7, 5],
    [8, 5],
  ],
  [
    [6, 7],
    [6, 8],
    [6, 9],
  ],
  [
    [1, 1],
    [1, 2],
    [1, 3],
    [1, 4],
  ],
];

function placeUserShipsOnBoard(coordinates) {
  for (let i = 0; i < 10; i++) {
    const userShip = ships(coordinates[i].length);
    user.board.placeShip(userShip, coordinates[i]);
  }
}

function placeOpponentShipsOnBoard(coordinates) {
  for (let i = 0; i < 10; i++) {
    const botShip = ships(coordinates[i].length);
    computer.board.placeShip(botShip, coordinates[i]);
  }
}

placeUserShipsOnBoard(coordinates1);
placeOpponentShipsOnBoard(coordinates2);

renderUserBoard(user);
renderOpponentBoard(computer);

let activePlayer = user;

function setActivePlayer(player) {
  activePlayer = player;
}

function checkIfGameOver() {
  if (user.board.areAllShipsSunk() || computer.board.areAllShipsSunk()) {
    return true;
  }
  return false;
}

function generateRandomCoordinates() {
  const randomCoordinates = [];
  const shipsLength = [1, 1, 1, 1, 2, 2, 2, 3, 3, 4];
  for (let i = 0; i < 10; i++) {
    const randomCoordinatesForThisLoop = [];
    if (i == 0) {
      const row = Math.floor(Math.random() * 10);
      const column = Math.floor(Math.random() * 10);
      let randomCoordinate = [row, column];
      randomCoordinatesForThisLoop.push(randomCoordinate);
      randomCoordinates.push(randomCoordinatesForThisLoop);
    } else if (shipsLength[i] == 1) {
      const row = Math.floor(Math.random() * 10);
      const column = Math.floor(Math.random() * 10);
      let randomCoordinate = [row, column];
      let index = 0;
      while (index < randomCoordinates.length) {
        if (
          randomCoordinates[index].some(
            (arr) =>
              arr[0] == randomCoordinate[0] && arr[1] == randomCoordinate[1],
          )
        ) {
          const row = Math.floor(Math.random() * 10);
          const column = Math.floor(Math.random() * 10);
          randomCoordinate = [row, column];
        }
        index++;
      }
      randomCoordinatesForThisLoop.push(randomCoordinate);
      randomCoordinates.push(randomCoordinatesForThisLoop);
    } else if (shipsLength[i] > 1) {
      function horizontalOrVertical() {
        const shapes = ['horizontal', 'vertical'];
        const index = Math.floor(Math.random() * 2);
        return shapes[index];
      }
      const shape = horizontalOrVertical();
      if (shape == 'horizontal') {
        const row = Math.floor(Math.random() * 10);
        let column = Math.floor(Math.random() * 6);
        for (let j = 0; j < shipsLength[i]; j++) {
          const randomCoordinate = [row, column++];
          let isDuplicate = false;
          let index = 0;
          while (index < randomCoordinates.length) {
            if (
              randomCoordinates[index].some(
                (arr) =>
                  arr[0] == randomCoordinate[0] &&
                  arr[1] == randomCoordinate[1],
              )
            ) {
              isDuplicate = true;
            }
            index++;
          }
          if (isDuplicate) {
            continue;
          }
          randomCoordinatesForThisLoop.push(randomCoordinate);
        }
        randomCoordinates.push(randomCoordinatesForThisLoop);
      } else if (shape == 'vertical') {
        let row = Math.floor(Math.random() * 6);
        const column = Math.floor(Math.random() * 10);
        for (let j = 0; j < shipsLength[i]; j++) {
          const randomCoordinate = [row++, column];
          let isDuplicate = false;
          let index = 0;
          while (index < randomCoordinates.length) {
            if (
              randomCoordinates[index].some(
                (arr) =>
                  arr[0] == randomCoordinate[0] &&
                  arr[1] == randomCoordinate[1],
              )
            ) {
              isDuplicate = true;
            }
            index++;
          }
          if (isDuplicate) {
            continue;
          }
          randomCoordinatesForThisLoop.push(randomCoordinate);
        }
        randomCoordinates.push(randomCoordinatesForThisLoop);
      }
    }
  }
  return randomCoordinates;
}

export {
  user,
  computer,
  setActivePlayer,
  checkIfGameOver,
  activePlayer,
  generateRandomCoordinates,
  placeUserShipsOnBoard,
  placeOpponentShipsOnBoard,
};
