const sumAll = function(n1, n2) {
    if (typeof n1 != "number" || typeof n2 != "number") {
        return "ERROR";
    } else if (n1 < 0 || n2 < 0) {
        return "ERROR";
    }

    /*
    // pretty sure it's better to do these assertions instead,
    // but the test cases don't want me to do this
    var assert = require("assert");
    assert(typeof n1 == "number");
    assert(typeof n2 == "number");
    assert(n1 >= 0);
    assert(n2 >= 0);
    */

    var start;
    var end;

    if (n1 < n2) {
        start = n1;
        end = n2;
    } else {
        start = n2;
        end = n1;
    }

    var sum = 0;
    for (var i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
