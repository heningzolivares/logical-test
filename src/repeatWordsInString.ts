export function repeatWordsInString(phrase: string) {
  const words = phrase.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '').split(' ');
  const uniqueWords = [...new Set(words)];
  const repetitions = uniqueWords.map(word => `${word}: ${words.filter(v => v === word).length}`);
  return repetitions.join(', ');
}
