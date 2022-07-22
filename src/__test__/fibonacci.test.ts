import { fibonacci } from "../fibonacci";

describe('fibo', () => {
  it('should return fibo sequence correctly', () => {
    const fibo = fibonacci(10);
    expect(fibo).toBe('0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55');
  })

})
