// Check if a string ends with a certain target string.
// NB: Since I completed this they've changed the rules so you can't do it this way, I might get around to updating this.

function confirmEnding(str, target) {
    return str.endsWith(target);
}

// Here is the "correct" way of doing it.

function confirmEnding(str, target) {
    return target.length > 0 && target === str.substr(str.length - target.length);
}
