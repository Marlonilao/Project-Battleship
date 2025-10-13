import { gameboard } from './gameboard';
import { ships } from './ships';

test('gameboard object should be defined', () => {
  expect(gameboard).toBeDefined();
});

test('Gameboards should be able to place ships at specific coordinates by calling the ship factory or class.', () => {
  const sampleBoard = gameboard();
  const sampleShip = ships(3);
  const coordinates = [
    [0, 0],
    [0, 1],
    [0, 2],
  ];
  sampleBoard.placeShip(sampleShip, coordinates);
  const expected = [
    [1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
  expect(sampleBoard.getBoard()).toEqual(expected);

  const sampleShip2 = ships(4);
  //prettier-ignore
  const coordinates2 = [
    [3, 0],[4, 0],[5, 0],[6, 0],
  ];
  sampleBoard.placeShip(sampleShip2, coordinates2);
  const expected2 = [
    [1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
  expect(sampleBoard.getBoard()).toEqual(expected2);
});

test('test ship.boardCoordinates if working', () => {
  const sampleBoard = gameboard();
  const sampleShip = ships(3);
  const coordinates = [
    [0, 0],
    [0, 1],
    [0, 2],
  ];
  sampleBoard.placeShip(sampleShip, coordinates);
  expect(sampleShip.boardCoordinates).toEqual(coordinates);
});
