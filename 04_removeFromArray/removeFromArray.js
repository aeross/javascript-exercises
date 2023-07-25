const removeFromArray = function() {
    var output = arguments[0];

    for (var i = 0; i < arguments.length; i++) {
        var j = output.indexOf(arguments[i]);
        if (j !== -1) {
            output.splice(j, 1);
        }
    }

    return output;
};

// Do not edit below this line
module.exports = removeFromArray;
