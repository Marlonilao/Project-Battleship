function ships(length) {
  let hits = null;
  let isSank = false;

  function getHits() {
    return hits;
  }

  function hit() {
    hits++;
  }

  function isSunk() {
    if (hits === length) {
      isSank = true;
    }

    return isSank;
  }

  return {
    length,
    getHits,
    hit,
    isSunk,
  };
}

export { ships };
