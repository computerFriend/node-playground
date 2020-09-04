// Reverse a string: 'Hello World' ---> 'dlroW olleH'
var myboi = 'Hello World';
console.log(reverserV2(myboi));


function reverserV1(inputString) {
    var reversedStrArr = [], strLength = inputString.length;
    for (var i=0; i<strLength; i++) {
        var newIndex = strLength - 1 - i;
        reversedStrArr[newIndex] = inputString[i];
    }
    return reversedStrArr.join('');
}

function reverserV2(inputString) {
    var reversedStrArr = new Array(inputString.length);
    for (var i=0, j=inputString.length-1; i<=j; i++, j--) {
        reversedStrArr[i] = inputString[j];
        reversedStrArr[j] = inputString[i];
    }
    return reversedStrArr.join('');

}