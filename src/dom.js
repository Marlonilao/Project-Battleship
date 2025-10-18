function renderUserBoard(user) {
  const userBoardDom = document.querySelector('#user-board');
  const board = user.board.getBoard();
  for (let i = 0; i < 10; i++) {
    const row = document.createElement('div');
    userBoardDom.appendChild(row);
    for (let j = 0; j < 10; j++) {
      const cell = document.createElement('div');
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

export { renderUserBoard };
