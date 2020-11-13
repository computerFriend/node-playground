// process.stderr.write('this is a debug message');


function solution(N) {
    // starting with brute force approach with O(N) time complexity.. will return to refactor if time
    let output = '';

    for (let i=1; i<=N; i++) {
       // first pass: using a flag to signal 2-3-5 divisibility.. might be a better way though
        let divisibility = false,
            nextLine= ''; // re-initialize nextLine each iteration

        // check for divisibility by 2,3,5
        //  TODO: refactor to reduce redundancy
        if (i % 2 === 0) {
            nextLine += 'Codility';
            divisibility = true;
        }
        if (i % 3 === 0) {
            nextLine += 'Test';
            divisibility = true;
        }
        if (i % 5 === 0) {
            nextLine += 'Coders';
            divisibility = true;
        }

        // if not divisible by any of the targets, set nextLine to i
        if (!divisibility) nextLine = i;
        output += nextLine + '\n';

    }
    
    // TODO: refactor to handle potential race conditions -- use async or a Promise
    process.stdout.write(output);
    
}
