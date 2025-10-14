import { ships } from './ships.js';

test('Ships object should be defined', () => {
  expect(ships).toBeDefined();
});

test('Ships hit()function should increase the number of "hits" in itself', () => {
  const myShip = ships(3);
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

test('isSunk() should be a function that calculates whether a ship is considered sunk based on its length and the number of hits it has received', () => {
  const myShip = ships(1);
  myShip.hit();
  const actual = myShip.isSunk();
  expect(actual).toBeTruthy();

  const myShip2 = ships(2);
  myShip2.hit();
  expect(myShip2.isSunk()).toBeFalsy();

  myShip2.hit();
  expect(myShip2.isSunk()).toBeTruthy();

  const myship3 = ships(4);
  myship3.hit();
  myship3.hit();
  myship3.hit();
  myship3.hit();
  expect(myship3.isSunk()).toBeTruthy();
});
