const repeatString = function(str, num) {
    newString = '';
    for (let i = 0; i < num; i++) {
        newString += str;
    }
    return newString;
};

console.log(repeatString('ball', 5));
// Do not edit below this line
module.exports = repeatString;
