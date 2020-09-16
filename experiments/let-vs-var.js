
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
// iteration as one separate env (binds to each scope separately),
// while var binds only once -- and it's to the entire function.

// Said another way: you could say the "let" _looks at the little things_,
// while _var will go far_.  See what I did there? It's a rhyme, 
// that means it's true.

// Don't believe me? Ask the dishes! They can sing, they can dance..
// https://stackoverflow.com/questions/31285911/why-let-and-var-bindings-behave-differently-using-settimeout-function