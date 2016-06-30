// Check if a string contains all the letters of another string.

function mutation(arr) {
    var string1 = arr[0].toLowerCase();
    var string2 = arr[1].toLowerCase();
    var present = 0;

    for (var i = 0; i < string2.length; i++) {
        if (string1.indexOf(string2.charAt(i)) >= 0) {
            present += 1;
        }
    }

    if (present >= string2.length) {
        return true;
    } else {
        return false;
    }
}
