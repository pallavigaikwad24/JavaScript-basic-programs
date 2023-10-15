function countVowels(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == 'a' || str[i] == 'o' || str[i] == "i" || str[i] == "e" || str[i] == "u" || str[i] == 'A' || str[i] == 'O' || str[i] == "I" || str[i] == "E" || str[i] == "U") {
            count += 1;
        }
    }

    return count;
}

let str = "India";
console.log(countVowels(str));