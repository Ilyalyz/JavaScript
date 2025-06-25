const words = ["hello", "test1", "world2", "abc", "123", "data4you"];

const wordsWithNumbers = words.filter(function(word) {
   return /\d/.test(word);
});

console.log(wordsWithNumbers);