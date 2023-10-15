function getLongName(arr) {
    let result = "";
    let maxLength = 0;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i].length > maxLength) {
            result = arr[i];
            maxLength = arr[i].length;
        }
    }

    return result;
}

let arr = ["India", "South Korea", "France"];
console.log(getLongName(arr));