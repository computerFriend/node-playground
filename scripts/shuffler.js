// Given an array of objects, shuffle them into random order
// BONUS: ensure no objects end up in their original position

let sampleArr = [0,1,2,3,4,5,6,7,8],
    colorArr = [
    "rgba(84, 71, 140, 0.5)", // purple
    "rgba(44, 105, 154, 0.5)", // bluejeans
    "rgba(4, 139, 168, 0.5)", // aqua
    "rgba(22, 219, 147, 0.5)", // happy-green
    "rgba(131, 227, 119, 0.5)", // lime
    "rgba(239, 234, 90, 0.5)", // yellow
    "rgba(241, 196, 83, 0.5)", // yellow-orange
    "rgba(242, 158, 76, 0.5)", // orange
    "rgba(247, 121, 118, 0.5)", // 
    "rgba(249, 65, 68, 0.5)" // 
];
console.log(shuffle(colorArr));

function shuffle(inputArray){
    // temp hack bc i dont have time... will come back & do this the 'right' way..
    return inputArray.sort(() => Math.random() - 0.5);;
}