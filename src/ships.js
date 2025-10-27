function ships(length) {
  let hits = 0;

  function hit() {
    hits++;
  }

  function isSunk() {
    return hits == length;
  }

  return {
    length,
    get hits() {
      return hits;
    },
    hit,
    isSunk,
  };
}

export { ships };
