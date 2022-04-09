export function selectionSort<T = any>(
  array: T[],
  compareFn: (x: T, y: T) => number = (x: any, y: any) => x - y
): T[] {
  const results = array.slice();
  for (let i = 0; i < results.length; i++) {
    let indexOfMin = i;
    for (let j = i + 1; j < results.length; j++) {
      if (compareFn(results[indexOfMin], results[j]) > 0) {
        indexOfMin = j;
      }
    }
    [results[indexOfMin], results[i]] = [results[i], results[indexOfMin]];
  }
  return results;
}
