// Replace every occurrence of a given character in a string with another.

var output = replacer('strawberry', 'r', 'X');
console.log('Output is ', output);


function replacer(input, replaceThis, withThat) {
    var newWordArray = [];
    input.split('').forEach(function(letter){
        if (letter.toLowerCase() === replaceThis) {
            newWordArray.push(withThat);
        } else {
            newWordArray.push(letter);
        }
    });
    
    return newWordArray.join('');
}