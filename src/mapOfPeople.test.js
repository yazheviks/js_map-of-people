'use strict';

const mapOfPeople = require('./mapOfPeople');

test('No people', () => {
  const map = mapOfPeople([]);
  expect([...map.keys()])
    .toEqual([]);
  expect([...map.values()])
    .toEqual([]);
});

test('Single person', () => {
  const map = mapOfPeople([23]);
  expect([...map.keys()])
    .toEqual([23]);
  expect([...map.values()])
    .toEqual([0]);
});

test('Single person reentering', () => {
  const map = mapOfPeople([23, 23, 23]);
  expect([...map.keys()])
    .toEqual([23]);
  expect([...map.values()])
    .toEqual([2]);
});

test('Single person leaving', () => {
  const map = mapOfPeople([23, 23, 23, 23]);
  expect([...map.keys()])
    .toEqual([]);
  expect([...map.values()])
    .toEqual([]);
});

test('Sample test', () => {
  const map = mapOfPeople([1, 3, 2, 1, 2, 1]);
  expect([...map.keys()])
    .toEqual([3, 1]);
  expect([...map.values()])
    .toEqual([1, 5]);
});

test('5 people, no one leaving', () => {
  const map = mapOfPeople([3, 2, 5, 4, 1]);
  expect([...map.keys()])
    .toEqual([3, 2, 5, 4, 1]);
  expect([...map.values()])
    .toEqual([0, 1, 2, 3, 4]);
});

test('10 people, 20 events', () => {
  const map = mapOfPeople(
    [7, 6, 8, 7, 5, 0, 3, 4, 4, 5, 5, 0, 0, 5, 7, 6, 0, 0, 8, 8]);
  expect([...map.keys()])
    .toEqual([3, 7, 0, 8]);
  expect([...map.values()])
    .toEqual([6, 14, 17, 19]);
});

test('20 people, 100 events', () => {
  const map = mapOfPeople(
    [11, 12, 17, 10, 3, 15, 19, 8, 3, 10, 8, 4, 10, 4, 3, 2, 3, 4, 11, 6,
      0, 1, 13, 0, 10, 17, 10, 1, 3, 5, 1, 10, 15, 9, 5, 10, 12, 14, 1, 19, 14,
      15, 16, 3, 16, 13, 1, 1, 12, 10, 13, 9, 3, 7, 17, 5, 16, 5, 1, 6, 19, 18,
      14, 5, 5, 11, 9, 17, 2, 19, 11, 9, 19, 1, 17, 13, 18, 11, 4, 12, 17, 10,
      15, 2, 18, 2, 16, 8, 2, 2, 0, 12, 17, 9, 10, 3, 16, 19, 5, 8]);
  expect([...map.keys()])
    .toEqual([7, 14, 11, 18, 0, 12, 17, 9, 16, 5]);
  expect([...map.values()])
    .toEqual([53, 62, 77, 84, 90, 91, 92, 93, 96, 98]);
});
