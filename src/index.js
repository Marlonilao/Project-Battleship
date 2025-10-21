import './stylesheet.css';
import {
  renderUserBoard,
  renderOpponentBoard,
  userTurnToAttack,
  computerTurnToAttack,
} from './dom';
import { gameboard } from './gameboard';
import { player } from './player';
import { ships } from './ships';

const user = player(gameboard());
const computer = player(gameboard(), 'computer');

function placeUserShipsOnBoard() {
  for (let i = 0; i < 10; i++) {
    const shipsLength = [1, 1, 1, 1, 2, 2, 2, 3, 3, 4];
    const userShip = ships(shipsLength[i]);
    const coordinates = [
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
    user.board.placeShip(userShip, coordinates[i]);
  }
}

function placeOpponentShipsOnBoard() {
  for (let i = 0; i < 10; i++) {
    const shipsLength = [1, 1, 1, 1, 2, 2, 2, 3, 3, 4];
    const botShip = ships(shipsLength[i]);
    const coordinates = [
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
    computer.board.placeShip(botShip, coordinates[i]);
  }
}

placeUserShipsOnBoard();
placeOpponentShipsOnBoard();

renderUserBoard(user);
renderOpponentBoard(computer);

let activePlayer = user;
userTurnToAttack();
computerTurnToAttack();

export { user, computer };
