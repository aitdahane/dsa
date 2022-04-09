import { mergeSort } from "./merge-sort";

describe('Merge Sort', () => {
  test('mergeSort([1, 2]) returns [1, 2]', () => {
    const a = [1, 2];
    mergeSort(a);
    expect(a).toEqual([1, 2]);
  });

  test('mergeSort([2, 1]) returns [1, 2]', () => {
    const a = [2, 1];
    mergeSort(a);
    expect(a).toEqual([1, 2]);
  });

  test('mergeSort([1, 3, 2]) returns [1, 2, 3]', () => {
    const a = [1, 3, 2];
    mergeSort(a);
    expect(a).toEqual([1, 2, 3]);
  });

  test('mergeSort([3, 1, 2, 4]) returns [1, 2, 3, 4]', () => {
    const a = [3, 1, 2, 4];
    mergeSort(a);
    expect(a).toEqual([1, 2, 3, 4]);
  });
});