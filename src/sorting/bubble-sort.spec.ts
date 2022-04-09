import { bubbleSort } from "./bubble-sort";

describe('Bubble Sort', () => {
  test('bubbleSort([1, 2]) returns [1, 2]', () => {
    expect(bubbleSort([1, 2])).toEqual([1, 2]);
  });

  test('bubbleSort([2, 1]) returns [1, 2]', () => {
    expect(bubbleSort([2, 1])).toEqual([1, 2]);
  });

  test('bubbleSort([1, 3, 2]) returns [1, 2, 3]', () => {
    expect(bubbleSort([1, 3, 2])).toEqual([1, 2, 3]);
  });

  test('bubbleSort([3, 1, 2, 4]) returns [1, 2, 3, 4]', () => {
    expect(bubbleSort([3, 1, 2, 4])).toEqual([1, 2, 3, 4]);
  });
});