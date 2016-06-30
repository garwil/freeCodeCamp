// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments.
// Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr) {

    var theArray = arguments[0];
    var filteredArray = [];
    var theArguments = [];
    for (var i = 1; i < arguments.length; i++) {
        theArguments.push(arguments[i]);
    }

    filteredArray = theArray.filter(function(value) {
        var theResult = true;
        for (var j = 0; j < theArguments.length; j++) {
            if (value === theArguments[j]) {
                theResult = false;
            }
        }
        return theResult;
    });
    return filteredArray;
}
