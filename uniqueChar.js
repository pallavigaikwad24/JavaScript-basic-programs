function getUnique(str) {
    let ans = "";

    for (let i = 0; i < str.length; i++) {
        if (ans.indexOf(str[i]) == -1) {
            ans += str[i];
        }
    }
    return ans;
}

let str = "abcdeagggft";
console.log(getUnique(str));