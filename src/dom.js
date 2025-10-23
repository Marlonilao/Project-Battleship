import {
  user,
  computer,
  setActivePlayer,
  checkIfGameOver,
  activePlayer,
} from './index';

function renderUserBoard(user) {
  const userBoardDom = document.querySelector('#user-board');
  const board = user.board.getBoard();
  for (let i = 0; i < 10; i++) {
    const row = document.createElement('div');
    userBoardDom.appendChild(row);
    for (let j = 0; j < 10; j++) {
      const cell = document.createElement('div');
      cell.setAttribute('data-row', `${i}`);
      cell.setAttribute('data-column', `${j}`);
      renderCell(board[i][j], cell);
      row.appendChild(cell);
    }
  }
}

function renderCell(coordinate, cell) {
  if (coordinate == 1) {
    cell.classList.add('ship');
  } else if (coordinate == 'M') {
    cell.classList.add('missed');
  } else if (coordinate == 'X') {
    cell.classList.add('hit');
  }
}

function renderOpponentBoard(opponent) {
  const opponentBoardDom = document.querySelector('#opponent-board');
  const board = opponent.board.getBoard();
  for (let i = 0; i < 10; i++) {
    const row = document.createElement('div');
    opponentBoardDom.appendChild(row);
    for (let j = 0; j < 10; j++) {
      const cell = document.createElement('div');
      cell.setAttribute('data-row', `${i}`);
      cell.setAttribute('data-column', `${j}`);
      renderCell(board[i][j], cell);
      row.appendChild(cell);
    }
  }
}

function userAttackHandler(e) {
  const board = computer.board.getBoard();
  const coordinate = [+e.target.dataset.row, +e.target.dataset.column];
  const hitOrMiss = computer.board.receiveAttack(coordinate);
  const cell = document.querySelector(
    `#opponent-board [data-row='${coordinate[0]}'][data-column='${coordinate[1]}']`,
  );
  if (hitOrMiss == 'HIT') {
    if (checkIfGameOver()) {
      renderGameOver();
      return;
    }
    setActivePlayer(user);
    userTurnToAttack();
  } else if (hitOrMiss == 'MISS') {
    disableUserAttack();
    setActivePlayer(computer);
    setTimeout(computerTurnToAttack, 800);
  }
  renderCell(board[+e.target.dataset.row][+e.target.dataset.column], cell);
}

function userTurnToAttack() {
  const cells = document.querySelectorAll('#opponent-board > div > div');
  cells.forEach((cell) => {
    cell.style.cursor = 'pointer';
    cell.addEventListener('click', userAttackHandler);
  });
}

function disableUserAttack() {
  const cells = document.querySelectorAll('#opponent-board > div > div');
  cells.forEach((cell) => {
    cell.style.cursor = '';
    cell.removeEventListener('click', userAttackHandler);
  });
}

function computerTurnToAttack() {
  const board = user.board.getBoard();
  const coordinate = computer.generateRandomCoordinate();
  const hitOrMiss = user.board.receiveAttack(coordinate);
  const cell = document.querySelector(
    `[data-row='${coordinate[0]}'][data-column='${coordinate[1]}']`,
  );
  if (hitOrMiss == 'HIT') {
    if (checkIfGameOver()) {
      renderGameOver();
      return;
    }
    setActivePlayer(computer);
    setTimeout(computerTurnToAttack, 800);
  } else {
    setActivePlayer(user);
    userTurnToAttack();
  }
  renderCell(board[coordinate[0]][coordinate[1]], cell);
}

function renderGameOver() {
  const winner = activePlayer == user ? 'User' : 'Computer';
  const container = document.querySelector('#battlefield-container');
  container.innerHTML = `<p>Game over! ${winner} wins!</p>`;
}
export {
  renderUserBoard,
  renderOpponentBoard,
  userTurnToAttack,
  computerTurnToAttack,
  disableUserAttack,
};
