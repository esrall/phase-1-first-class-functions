function receivesAFunction (thing) {
    return thing();
}

receivesAFunction(function () { return "Heyaaa!"});

function returnsANamedFunction() {
    return function recievesAFunction() {}
}

returnsANamedFunction(function () {return receivesAFunction});

function returnsAnAnonymousFunction () {
    return function () {
        console.log("skippidiboopbabwhadababbo...");
    }
}

returnsAnAnonymousFunction(function() {return "boowwm"});