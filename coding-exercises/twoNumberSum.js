// Given an array and a targetNumber, find number pair adding up to sum, if it exists.

const twoNumberSum = function(nums, target) {
    // have a bin for all the numbers already tried
    let alreadyTried = new Set();
    
    for (var i=0; i<nums.length; i++) {
        
        let originNum = nums[i];
        let distanceFromTarget = target - originNum;
        if (alreadyTried.has(distanceFromTarget)) {
            return [i,nums.indexOf(distanceFromTarget)]

        } else {
            alreadyTried.add(nums[i])
        }
    }
    
}


// brute force solution (Bad)
const twoSumBruteForce = function(nums, target) {
    // for a brute force, O(N!) solution...
    let originIndex = -1;
    let nextIndex = -1;
    let sum;
    
    while (sum !== target && originIndex<(nums.length-1)) {
        originIndex++;  
        console.log('Checking origin number ', nums[originIndex]);
        nextIndex = originIndex;
        while (sum !== target && nextIndex < nums.length) {
            nextIndex++;
            console.log('nextIndex number is ', nums[nextIndex]);
           sum = nums[originIndex] + nums[nextIndex];
            console.log('sum is ', sum);
        }
    }
    let indices = [originIndex, nextIndex];
    return indices;
    
};