export function insertionSort<T = any>(
  array: T[],
  compareFn: (a: T, b: T) => number = (a: any, b: any) => a - b
): T[] {
  const results = array.slice();
  for (let i = 0; i < results.length; i++) {
    const current = array[i];
    let j = i - 1;
    while (j >= 0 && compareFn(results[j], results[j + 1]) > 0) {
      results[j + 1] = results[j];
      j = j - 1;
    }
    results[j + 1] = current;
  }
  return results;
}
