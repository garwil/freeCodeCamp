// Truncate a string

function truncateString(str, num) {

    var newString = "";
    var chop = str.length;
    chop = num - str.length;

    if (str.length <= num) {
        return str;
    } else {
        if (num <= 3) {
            newString = str.slice(0, chop) + "...";
            return newString;
        } else {
            chop = chop - 3;
            newString = str.slice(0, chop) + "...";
            return newString;
        }
    }
}
