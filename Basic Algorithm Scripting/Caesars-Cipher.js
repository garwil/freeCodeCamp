// A function to decode text encrypted with Caesar's Cipher. This is probably the least efficient way to do this but at least it works!

function rot13(str) {
    var decodedString = "";

    for (var i = 0; i < str.length; i++) {

        switch (str.charCodeAt(i)) {
            case 65:
                decodedString += String.fromCharCode(78);
                break;
            case 66:
                decodedString += String.fromCharCode(79);
                break;
            case 67:
                decodedString += String.fromCharCode(80);
                break;
            case 68:
                decodedString += String.fromCharCode(81);
                break;
            case 69:
                decodedString += String.fromCharCode(82);
                break;
            case 70:
                decodedString += String.fromCharCode(83);
                break;
            case 71:
                decodedString += String.fromCharCode(84);
                break;
            case 72:
                decodedString += String.fromCharCode(85);
                break;
            case 73:
                decodedString += String.fromCharCode(86);
                break;
            case 74:
                decodedString += String.fromCharCode(87);
                break;
            case 75:
                decodedString += String.fromCharCode(88);
                break;
            case 76:
                decodedString += String.fromCharCode(89);
                break;
            case 77:
                decodedString += String.fromCharCode(90);
                break;
            case 78:
                decodedString += String.fromCharCode(65);
                break;
            case 79:
                decodedString += String.fromCharCode(66);
                break;
            case 80:
                decodedString += String.fromCharCode(67);
                break;
            case 81:
                decodedString += String.fromCharCode(68);
                break;
            case 82:
                decodedString += String.fromCharCode(69);
                break;
            case 83:
                decodedString += String.fromCharCode(70);
                break;
            case 84:
                decodedString += String.fromCharCode(71);
                break;
            case 85:
                decodedString += String.fromCharCode(72);
                break;
            case 86:
                decodedString += String.fromCharCode(73);
                break;
            case 87:
                decodedString += String.fromCharCode(74);
                break;
            case 88:
                decodedString += String.fromCharCode(75);
                break;
            case 89:
                decodedString += String.fromCharCode(76);
                break;
            case 90:
                decodedString += String.fromCharCode(77);
                break;
            default:
                decodedString += String.fromCharCode(str.charCodeAt(i));
                break;
        }
    }
    return decodedString;
}

/* Here is a much more efficient way of doing it. I found this online after finishing this part of the course.
I was on the right lines before started again with the solution above but IIRC I was using the wrong char codes!
*/

function rot13(str) {
    var newString = [];

    for (var i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) < 65 || str.charCodeAt(i) > 90) {
            newString.push(str.charAt(i));
        } else if (str.charCodeAt(i) > 77) {
            newString.push(String.fromCharCode(str.charCodeAt(i) - 13));
        } else {
            newString.push(String.fromCharCode(str.charCodeAt(i) + 13));
        }
    }
    return newString.join("");
}
