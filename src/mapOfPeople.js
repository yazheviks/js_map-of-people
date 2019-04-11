'use strict';

/**
 * Implement mapOfPeople function:
 *
 * You are given an array of numbers. Each of the numbers represents a person. A
 * number in the array may occur just once or it may occur several times, in
 * which case it denotes the same person every time it occurs.
 *
 * You also have a room. Initially the room is empty. Then people start to come
 * into the room in the order they appear in the array. More accurately, if the
 * next number in the array is N, the person N enters the room if he wasn't
 * already in the room or leaves the room in case the person was already in the
 * room at that point. A number at position S in the input array corresponds to
 * the Sth second.
 *
 * For instance, if the input array is [1, 3, 2, 1, 2, 1], it means that the
 * following has occurred:
 *
 * — person 1 entered the room at 0 seconds;
 * — person 3 entered the room at 1 second;
 * — person 2 entered the room at 2 seconds;
 * — person 1 left the room at 3 seconds;
 * — person 2 left the room at 4 seconds;
 * — person 1 reentered the room at 5 seconds.
 *
 * Return a Map that contains the people currently in the room and stores the
 * time they entered. People who have entered earlier should occur earlier in
 * the Map that you return. For the example above, the correct answer is a Map
 * containing elements 3, 1 (in that order) with map[3] === 1 (as person 3
 * entered at 1 second) and map[1] === 5 (as the last time person 1 entered the
 * room was at 5 seconds). Return an empty map if there are no people in the
 * room.
 *
 * mapOfPeople([1, 3, 2, 1, 2, 1]) === Map(2) {3 => 1, 1 => 5}
 * mapOfPeople([1, 1]) === Map(0) {}
 *
 * @param {number[]} people
 *
 * @return {Map}
 */
function mapOfPeople(people) {
  // write code here
}

module.exports = mapOfPeople;
