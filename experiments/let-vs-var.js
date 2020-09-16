
waitAndSee();

function waitAndSee() {
    for (let y = 0; y < 5; y++) {
    // for (var y = 0; y < 5; y++) {
        setTimeout(function () {
            console.log(y);
        }, 500);
    }

}