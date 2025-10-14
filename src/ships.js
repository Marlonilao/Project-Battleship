function ships(length) {
  let hits = null;

  function getHits() {
    return hits;
  }

  function hit() {
    hits++;
  }

  function isSunk() {
    if (hits === length) return true;
    else return false;
  }

  return {
    length,
    getHits,
    hit,
    isSunk,
  };
}

export { ships };
