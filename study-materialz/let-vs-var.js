
waitAndSee();

// Using let produces one result, while var produces another. Remember why?

function waitAndSee() {
    for (let y = 1; y < 5; y++) {
    // for (var y = 0; y < 5; y++) { // uncomment me to watch the magic!
        setTimeout(function () {
            console.log(y);
        }, 500);
    }
}

// Answer & explanation is in the ReadMe!