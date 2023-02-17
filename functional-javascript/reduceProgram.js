//var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']
function countWords(inputWords){
   return inputWords.reduce((allWords, word) => {
        const count = allWords[word] ?? 0;
        return{
            ...allWords,
            [word] : count +1,
        };
    }, {});
}
// console.log(countWords(inputWords))
module.exports = countWords