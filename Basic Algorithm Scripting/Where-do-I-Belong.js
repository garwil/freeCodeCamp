// Sort an array and then insert a value in the correct place.

function getIndexToIns(arr, num) {

    var theIndex = 0;
    arr.push(num);
    arr = arr.sort(function(a, b) {
        return a - b;
    });
    for (var i = 0; i < arr.length; i++) {
        if (num === arr[i]) {
            theIndex = arr.indexOf(num);
        }
    }
    return theIndex;
}
