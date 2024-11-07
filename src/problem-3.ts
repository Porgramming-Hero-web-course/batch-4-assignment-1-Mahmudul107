// Problem-3

const countWordOccurrences = (sentence: string, word: string): number => {
  const words = sentence.toLowerCase().split(" ");

  //? The filter method will only keep words that match the provided word
  return words.filter((w) => w === word.toLowerCase()).length;
};

countWordOccurrences("I love typescript", "typescript");