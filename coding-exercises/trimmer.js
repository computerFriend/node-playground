// Given a string with leading and/or trailing whitespace characters,
// return a string with such characters removed. For the sake of simplicity,
// we’ll assume a space is the only whitespace character.
var spaceyString = '    hello, trim me please         ';
console.log("*" + trimmerV2 (spaceyString) + "*")

function trimmerV2(inputString) {
    var startIndex = findNonSpaceIndex(inputString,0,1);
    var stopIndex = findNonSpaceIndex(inputString, inputString.length-1, -1) + 1;
    // console.log('start index is ' + startIndex + ', stop index is ' + stopIndex);
    var trimmedStr = inputString.substring(startIndex, stopIndex);    
    return trimmedStr;
}

function findNonSpaceIndex(inputString, i, direction) {
    var stringStarts = false;
    while (stringStarts == false && inputString[i]) {
        if (inputString[i].charCodeAt(0) !== 32) return i;
        i = i + (1*direction);
    }
    return -1;
}