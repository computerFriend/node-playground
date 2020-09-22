// Product sum for "special arrays"

var mySample = [8, [1,2], 3]; // 17

console.log(productSum(mySample));

function productSum(array) {
    return innerSum(array, 1);
    function innerSum(array, depth) {
        let sum = 0;
        console.log('received an array for innerSum: ', array);
        array.forEach(function(element) {
            console.log('Checking element ', element);
            if (Array.isArray(element)) {
                sum += innerSum(element, depth+1);
            } else {
                sum+= element;
            }
        });
        return depth * sum;
    }
}



module.exports = productSum;