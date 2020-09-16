// NOTE: I misunderstood the problem. The sample data sets below are invalid. START OVER

var smallStraightRiver =[
    [0,1,0],
    [0,1,0],
    [0,1,1]
    ];
var curvyRiver =[
    [0,0,1,0],
    [0,1,1,0],
    [0,1,0,0],
    [0,1,1,1]
];
var nonSquareMatrix =[
    [0,0,1,0],
    [0,1,1,0],
    [0,1,0,0]
];
var horizontalRiver = [
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [1,1,1],
    [0,0,0]
];

console.log('Widths for river:\n', riverSizes(smallStraightRiver));

function riverSizes(riverArray) {
    let riverWidths =[],
        riverbankProfile = {
            lowerBank: 0,
            upperBank: riverArray[0].length-1
        };

    var topRiverIndex;
    // Determine whether or not the river is vertical & straight by checking for any rows of all zeroes
    var t=-1, b=riverArray.length, zeroRow=false;
    while (zeroRow === false || t<(riverArray.length)/2) {
        t++;
        b--;
        if (!riverArray[t].includes(1)) {
            zeroRow = true;
        } else if (!riverArray[b].includes(1)) {
            zeroRow = true;
        }
    }


    // For each row, start evaluation at the riverBank for the previous row
    // Don't stop until riverbank is confirmed

    // once riverbank is confirmed, update riverbankProfile & return

    // check sum of row; if sum of row === sum of previous row, widths are the same


    return riverWidths;

}

function confirmRiverBank(origin, direction, row) {


}