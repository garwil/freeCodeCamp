// Title Case a Sentence

function titleCase(str) {
    var words = str.toLowerCase().split(" ");
    var letters = "";
    var upper = "";
    
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].split("");
        words[i][0] = words[i][0].toUpperCase();
        words[i] = words[i].join("");
    }
    str = words.join(" ");
    return str;
}
