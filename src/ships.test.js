import { ships } from './ships.js';

test('Ships object should be defined', () => {
  expect(ships).toBeDefined();
});

test('Ships hit()function should increase the number of "hits" in itself', () => {
  const myShip = new ships(3);
  myShip.hit();
  const actual = myShip.getHits();
  const expected = 1;
  expect(actual).toBe(expected);

  myShip.hit();
  const actual2 = myShip.getHits();
  const expected2 = 2;
  expect(actual2).toBe(expected2);

  myShip.hit();
  expect(myShip.getHits()).toBe(3);
});

test('isSunk() should be a function that calculates weisSunk() should be a function that calculates whether a ship is considered sunk based on its length and the number of hits it has received', () => {
  const myShip = new ships(1);
  myShip.hit();
  const actual = myShip.isSunk();
  expect(actual).toBeTruthy();
});
