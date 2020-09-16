
waitAndSee();

// Using let produces one result, while var produces another. Remember why?

function waitAndSee() {
    for (let y = 0; y < 5; y++) {
    // for (var y = 0; y < 5; y++) { // uncomment me to watch the magic!
        setTimeout(function () {
            console.log(y);
        }, 500);
    }
}

// Answer:
// It's because "let" is block-scope while "var" is function-scoped.
// If you view each iteration of the loop as its own new "block,"
// it's easier to see why 'let' stores each value, while
// var dominates the earth with its latest value.  "let" sees each
// iteration as one separate env, while var considers the entire function
// to be its domain. var is just an asshole like that. Which can be good,
// in certain situations... as all assholes are. #assholesArePeopleToo #varWillGoFar