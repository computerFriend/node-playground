
// beginning with brute force approach with O(N^2) time complexity... definitely need to clean this up a little
console.log(solution('aaBabcDaA'));

function solution(S) {

    // sort the letters
    let letters = S.split('').sort(function(a, b){return b-a});
    console.log('sorted letters:\n', letters);

    // forEach uppercase letter, check to see if the string contains its pair,
    // until you get to the lowercase letters, at which point we know there are no upper-lower pairs

    for (let i=0; i<letters.length; i++) {
    // letters.forEach(function(letter){
        // if charCode < 90, then it's uppercase and we can quit
        if (letters[i].charCodeAt(0) < 91) {
            console.log('this letter '+ letters[i] + ' is uppercase; quitting now');
            return 'NO';
        }
        // check to see if the letter exists in lower case
        if (S.indexOf(letters[i].toLowerCase()) > -1) {
            return letters[i];
        }
    };

    // TODO: refactor to handle race conditions

    // if nothing has a case pair, then return 'NO'
    return 'NO';





}