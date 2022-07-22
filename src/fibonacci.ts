export function fibonacci(num: number) {
  let fibonacciSequence = [0,1];

  for (let i = 2; i <= num; i++) {
    fibonacciSequence[i] = fibonacciSequence[i-1] + fibonacciSequence[i-2];
  }

  return fibonacciSequence.join(', ');

}
