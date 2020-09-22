// Given a string of two or more words, capitalize the first letter of each word.
// Each word is separated by a space.

var myStr = 'hi how are you?';
console.log(capitalizeFirstLetterSentence(myStr));

// Assumptions
// assuming no symbols in words

function capitalizeFirstLetterSentence(inputString) {
    // split the words into an array
    var wordArray = inputString.split(' ');
    console.log('Word array:\n', wordArray);

    // expanded version
    // var newStr = '';
    // wordArray.forEach(function(word) {
    //     newStr += capitalizeFirst(word) + ' ';
    //     // console.log('newStr is now *' + newStr + '*');
    // });
    // // trim off the trailing space
    // return newStr.trim();

    // Map method
    // var newWords = wordArray.map(word => capitalizeFirst(word));
    // // Remember: just doing this wont work: wordArray.map(word => capitalizeFirst(word))
    // // You NEED to assign it to a variable (newWords) in order for it to be changeable
    // return newWords.join(' ');

    // succinct version:
    return inputString.split(' ').map(word => capitalizeFirst(word)).join(' ');
    // QUESTION: why do we not need to declare new vars here?
    // answer: method chaining    

}

function capitalizeFirst(inputword) {
    // grab charCode of first letter
    var charCode = inputword.charCodeAt(0);
    
    // check to ensure letter isn't already capitalized
    if (charCode > 96) {
        var newStr = String.fromCharCode(charCode-32) + inputword.substring(1);
        return newStr;
    } else {
        console.log('word is already capitalized: ', inputword);
        return inputword;
    }


}