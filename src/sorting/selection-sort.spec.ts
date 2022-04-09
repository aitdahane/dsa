import { selectionSort } from "./selection-sort";

describe('Selection Sort', () => {
  test('selectionSort([1, 2]) returns [1, 2]', () => {
    expect(selectionSort([1, 2])).toEqual([1, 2]);
  });

  test('selectionSort([2, 1]) returns [1, 2]', () => {
    expect(selectionSort([2, 1])).toEqual([1, 2]);
  });

  test('selectionSort([1, 3, 2]) returns [1, 2, 3]', () => {
    expect(selectionSort([1, 3, 2])).toEqual([1, 2, 3]);
  });

  test('selectionSort([3, 1, 2, 4]) returns [1, 2, 3, 4]', () => {
    expect(selectionSort([3, 1, 2, 4])).toEqual([1, 2, 3, 4]);
  });
});