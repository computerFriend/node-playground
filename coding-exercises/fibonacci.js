// Return the nth term of a fibonacci sequence

console.log(getNthFib(6));

function getNthFib(n) {

    // TODO: dynamic setup for n<2
    let arr = [0, 1];

    // for now assuming that n > 2
    if (n >= 0) {

        if (n <= 2) {
            return arr[n+1];
        } else {
            var counter = 3, nthTerm = 1;
            while (counter <= n) {
                nthTerm = arr[0] + arr[1];
                arr.push(nthTerm);
                arr = arr.slice(1);
                counter++;
            }
            return nthTerm;
        }

    } else {
        return -1;
    }

}