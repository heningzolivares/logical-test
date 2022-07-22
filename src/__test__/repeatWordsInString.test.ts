import { repeatWordsInString } from "../repeatWordsInString";

const expectStr = "hi: 1, my: 2, name: 2, is: 2, john: 1, and: 1, short: 1"

describe('repeat', () => {
  it('should return words matches', () => {
    const words = repeatWordsInString('hi my name is john and my name is short');
    expect(words).toBe(expectStr);
  })

})
