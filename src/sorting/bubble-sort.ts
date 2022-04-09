export function bubbleSort<T = any>(
  array: T[],
  compareFn: (a: T, b: T) => number = (a: any, b: any) => a - b
): T[] {
  const results = array.slice();
  for (let i = 0; i < results.length; i++) {
    for (let j = 1; j < results.length; j++) {
      if (compareFn(results[j - 1], results[j]) > 0) {
        [results[j - 1], results[j]] = [results[j], results[j - 1]];
      }
    }
  }
  return results;
}
