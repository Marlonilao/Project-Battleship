import { user, computer } from './index';

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

function userTurnToAttack() {
  const board = computer.board.getBoard();
  const cells = document.querySelectorAll('#opponent-board > div > div');
  cells.forEach((cell) => {
    cell.style.cursor = 'pointer';
    cell.addEventListener('click', (e) => {
      const coordinate = [+e.target.dataset.row, +e.target.dataset.column];
      computer.board.receiveAttack(coordinate);
      renderCell(board[+e.target.dataset.row][+e.target.dataset.column], cell);
    });
  });
}

function computerTurnToAttack() {
  const board = user.board.getBoard();
  const coordinate = computer.generateRandomCoordinate();
  user.board.receiveAttack(coordinate);
  const cell = document.querySelector(
    `[data-row='${coordinate[0]}'][data-column='${coordinate[1]}']`,
  );
  renderCell(board[coordinate[0]][coordinate[1]], cell);
}

export {
  renderUserBoard,
  renderOpponentBoard,
  userTurnToAttack,
  computerTurnToAttack,
};
