// Remove all the false values from an array.
function bouncer(arr) {
    filteredArray = arr.filter(function(value) {
        var theResult = true;
        for (var i = 0; i < arr.length; i++) {
            if (!value) {
                theResult = false;
            }
        }
        return theResult;
    });
    return filteredArray;
}
