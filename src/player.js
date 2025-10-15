function player(gameboard, type = 'real') {
  const board = gameboard;
  if (type == 'real') {
    return {
      board,
    };
  } else if (type == 'computer') {
    return {
      board,
    };
  }
}

export { player };
