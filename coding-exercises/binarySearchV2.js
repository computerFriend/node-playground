// binary search: attempt 2

let mySample = [1,2,3,4,5,6,7],
    theirSample1 = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73],
    theirSample2 = [1, 5, 23, 111];

// console.log(binarySearch(mySample, 2)); // should be 1
// console.log(binarySearch(theirSample1, 33)); // should be 3
console.log(binarySearch(theirSample2, 5)); // should be 1

function binarySearch(array, target) {
    return findMatch(0, array.length-1, array, target);
}

function findMatch(L, R, array, target) {
    console.log("> L: " + L + "\n> R: " + R);
    if (L >= R) {
        if (array[L] === target) {
            return L;
        } else {
            return -1;
        }
    }
    let midpoint = Math.ceil((R-L)/2);
    console.log('midpoint: ', midpoint);
    if (array[midpoint] === target) {
        console.log('Found the target! Returning midpoint ' + midpoint);
        return midpoint;
    } else if (array[midpoint] > target) {
        return findMatch(L, midpoint, array, target);
    } else { // midpoint val < target
        return findMatch(midpoint, R, array, target);
    }
}

exports.binarySearch = binarySearch;