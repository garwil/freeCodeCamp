// Return the largest numbers in an array

function largestOfFour(arr) {
    var finalArr = [];

    arr.sort(function(a, b) {
        return b - a;
    });
    for (var i = 0; i < arr.length; i++) {
        arr[i].sort(function(a, b) {
            return b - a;
        });
        finalArr.push(arr[i][0]);
    }
    return finalArr;
}
