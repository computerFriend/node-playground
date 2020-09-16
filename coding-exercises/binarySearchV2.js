// binary search: attempt 2

let mySample = [1,2,3,4,5,6,7],
    theirSample1 = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73];

// console.log(binarySearch(mySample, 2)); // should be 1
console.log(binarySearch(theirSample1, 33));

function binarySearch(array, target) {

    findMatch(0, array.length-1, target, array);

    function findMatch(L, R, target, array) {
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
            console.log('typeof midpoint: ' + typeof midpoint);
            return midpoint;
        } else if (array[midpoint] > target) {
            findMatch(L, midpoint, target, array);
        } else { // midpoint val < target
            findMatch(midpoint, R, target, array);
        }
    }

}