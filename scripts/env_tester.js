// Test to see how environment vars are handled

var MAX_RETRIES = process.env.MAX_RETRIES || 5;
// console.log('Look, I got the MAX_RETRIES: ', MAX_RETRIES);

var job = {
    "id": 1234,
    "slug": 'testjob-1234',
    "retryCount": 21
};

console.log('Raw job:\n',job);
var spacer = '\t';
console.log('Formatted job:\n' + JSON.stringify(job,null,spacer));
