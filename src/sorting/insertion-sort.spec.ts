import { insertionSort } from "./insertion-sort";

describe('Insertion Sort', () => {
  test('insertionSort([1, 2]) returns [1, 2]', () => {
    expect(insertionSort([1, 2])).toEqual([1, 2]);
  });

  test('insertionSort([2, 1]) returns [1, 2]', () => {
    expect(insertionSort([2, 1])).toEqual([1, 2]);
  });

  test('insertionSort([1, 3, 2]) returns [1, 2, 3]', () => {
    expect(insertionSort([1, 3, 2])).toEqual([1, 2, 3]);
  });

  test('insertionSort([3, 1, 2, 4]) returns [1, 2, 3, 4]', () => {
    expect(insertionSort([3, 1, 2, 4])).toEqual([1, 2, 3, 4]);
  });
});