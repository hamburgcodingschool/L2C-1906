function reverseText(text) {

    var reversed = "";
    for (var i = text.length - 1; i >= 0; i--) {
        reversed += text[i];
    }

    return reversed;
}

function isPalindrome(text) {
//    var mirrorText = reverseText(text);
//    
//    if (text == mirrorText) {
//        return true;
//    } else {
//        return false;
//    }
    
    return text == reverseText(text);
}
