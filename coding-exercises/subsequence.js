
let myArray = [8, 9, 1, 0, 2, -1, 3, 4],
    theirArray = [5, 1, 22, 25, 6, -1, 8, 10],
    sequence = [1, 2, 3],
    badSequence = [7, 7, 7, 7],
    middleSequence = [9,1,1],
    sampleSequence = [1, 6, -1, 10],

    theirArray2 =     [5, 1, 22, 25, 6, -1, 8, 10]
    sampleSequence3 = [1, 6, -1, -1];

    sampleSequence2 = [5, 1, 22, 22, 6, -1, 8, 10];

console.log(isValidSubsequence(theirArray2, sampleSequence3));

function isValidSubsequence(array, sequence) {

    if (array.length < sequence.length) return false;
    var roundResults = {
        startIndex: 0,
        sequenceStart: 0
    };
    var slicedArray = array;

    while (roundResults.sequenceStart <= sequence.length) {
        slicedArray = slicedArray.slice(roundResults.startIndex),
        sequenceStart = roundResults.sequenceStart;
        roundResults = findMatch(slicedArray, sequence, sequenceStart);
        if (roundResults.match === false) {
            console.log('No match found. Exiting now...');
            return false;
        }
    }

    return true; // double-check on this

    function findMatch(array, sequence, sequenceStart) {
        // exit if sequenceStart is at the end of the sequence
        if (sequenceStart > sequence.length-1) return {match: true};
        var match = false, startIndex;
        var startIndex = array.indexOf(sequence[sequenceStart]);
        if (startIndex > -1)  match = true;
        sequenceStart++;

        return {
            match: match,
            startIndex: startIndex+1,
            sequenceStart: sequenceStart
        };
    }

}