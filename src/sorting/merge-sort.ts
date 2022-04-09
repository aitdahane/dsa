export function mergeSort<T = any>(
  array: T[],
  fromIndex: number = 0,
  toIndex: number = array.length - 1,
  compareFn: (a: T, b: T) => number = (a: any, b: any) => a - b
): void {
  if (fromIndex >= toIndex) {
    return;
  }
  const middleIndex = Math.floor((fromIndex + toIndex) / 2);
  console.log(fromIndex, middleIndex, toIndex);
  mergeSort(array, fromIndex, middleIndex, compareFn);
  mergeSort(array, middleIndex + 1, toIndex, compareFn);
  merge(array, fromIndex, middleIndex, toIndex, compareFn);
}

function merge<T = any>(
  array: T[],
  fromIndex: number,
  middleIndex: number,
  toIndex: number,
  compareFn: (a: T, b: T) => number
): void {
  const array1 = array.slice(fromIndex, middleIndex + 1);
  const array2 = array.slice(middleIndex + 1, toIndex + 1);

  let i1 = 0;
  let i2 = 0;
  let j = fromIndex;
  while (i1 < array1.length && i2 < array2.length) {
    if (compareFn(array1[i1], array2[i2]) < 0) {
      array[j] = array1[i1];
      i1++;
    } else {
      array[j] = array2[i2];
      i2++;
    }
    j++;
  }

  while (i1 < array1.length) {
    array[j] = array1[i1];
    i1++;
    j++;
  }

  while (i2 < array2.length) {
    array[j] = array2[i2];
    i2++;
    j++;
  }
}
