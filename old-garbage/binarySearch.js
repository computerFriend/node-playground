// Attempt to recreate the binary search function

// PROBLEM: for an ODD array length, no match can be found if target is at the beginning

let sampleArray1 = [-27, -26, -25, -19, -15, -11, -9, -7, -4, -2, 1, 4, 5, 6, 12, 15, 18, 22, 29, 40, 47];
let smallArray = [-1, 0, 1, 2, 3];

var answer = binarySearchV1(-26, sampleArray1)
// console.log("The typeof external answer is " + typeof answer );

function binarySearchV1(target, inputArr, indexBuffer) {
    if (!indexBuffer) indexBuffer = 0;

    // check to make sure array length > 1
    console.log('length of input array: ', inputArr.length);
    if (inputArr.length < 2) {
        if (inputArr[0] === target) return indexBuffer;
        else {
            console.error('No match could be found')
            return -1;
        }
    }

    // Start at the midpoint
    var midpoint = Math.round(inputArr.length/2)-1;
    console.log('Checking value: ' + inputArr[midpoint]);
    if (inputArr[midpoint] === target) {
        console.log('The value at the midpoint, ' + inputArr[midpoint] + ' is equal to the target of ' + target);
        console.log('midpoint is ' + midpoint + ' and indexBuffer is ' + indexBuffer);
        var answerIndex = midpoint + indexBuffer;
        console.log('The answer is ' + answerIndex);
        return answerIndex;

    } else {
        // slice the array at the midpoint & send it back through the fxn recursively
        if (inputArr[midpoint] > target) {
            // check edge-case: inputArr <= 3
            if (inputArr.length <= 3) {
                if (inputArr[0] === target) {
                    console.log('The answer is 0');
                    return 0;
                } else { return -1; }
            }
            // slice below the midpoint
            var newArr = inputArr.slice(0,midpoint-1);
            binarySearchV1(target, newArr, 0);

        } else {
            // slice above the midpoint
            var newArr = inputArr.slice(midpoint+1);
            var newBuffer = indexBuffer + (inputArr.length - newArr.length);
            binarySearchV1(target, newArr, newBuffer);

        }
        
    }

}