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

export { renderUserBoard, renderOpponentBoard };
