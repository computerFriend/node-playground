// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

console.log(solution(732));

function solution(N) {
    // split the number into digits & then inject the 5 where digit < 5
    let Nstring = N.toString();
    let digits = Nstring.split('');
    let i=0, direction=1;

    if (digits[i]==='-') {
        i++;
        direction=-1;
    }

    console.log('entering while loop...');
    while (i<digits.length && Number(digits[i])*direction > 5) {
        console.log('digit ' + digits[i] + ' is greater than 5');
        i++;
    }
    
    // inject 5 at index i
    let beginning = Nstring.substring(0,i);
    console.log('beginning is ' + beginning);
    let end = Nstring.substring(i);
    console.log('end is ' + end);
    let maxVal = beginning + '5' + end;
    // let maxVal = Nstring.substring(i) + '5' + Nstring.substring(i+1);
    return Number(maxVal);

}
