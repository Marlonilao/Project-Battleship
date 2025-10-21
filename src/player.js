function player(gameboard, type = 'real') {
  const board = gameboard;
  if (type == 'real') {
    return {
      board,
    };
  } else if (type == 'computer') {
    const possibleAttacks = [];
    for (let r = 0; r < 10; r++) {
      for (let c = 0; c < 10; c++) {
        possibleAttacks.push([r, c]);
      }
    }

    function generateRandomCoordinate() {
      if (possibleAttacks.length == 0) {
        return null;
      }
      let randomIndex = Math.floor(Math.random() * possibleAttacks.length);
      const removed = possibleAttacks[randomIndex];
      possibleAttacks.splice(randomIndex, 1);
      return removed;
    }

    return {
      board,
      generateRandomCoordinate,
    };
  }
}

export { player };
