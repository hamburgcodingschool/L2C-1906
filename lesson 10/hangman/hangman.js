function dashItUp(phrase) { // gotham city

    var newPhrase = "";

    for (var i = 0; i < phrase.length; i++) {
        var letter = phrase[i];
        if (letter == " ") {
            newPhrase += " ";
        } else {
            newPhrase += "-";
        }

    }
    return newPhrase;
}

function checkPhrase(secretPhrase, userPhrase, userLetter) {

    for (var i = 0; i < secretPhrase.length; i++) {
        var secretLetter = secretPhrase[i];
        // if (userLetter == secretLetter) {
        // lets do some fancy compating
        if (secretLetter.localeCompare(userLetter, 'en', {
                'sensitivity': 'base'
            }) == 0) {

            userPhrase = replaceString(userPhrase, i, secretLetter);

        }

    }

    return userPhrase;
}

function replaceString(text, pos, letter) {

    let s = text.substr(0, pos);
    let e = text.substr(pos + 1, text.length);

    return s + letter + e;

}

function myRandom(min, max) {

    return Math.floor(Math.random() * (max + 1 - min)) + min;

}
