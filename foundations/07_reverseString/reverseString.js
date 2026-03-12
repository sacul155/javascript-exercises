const reverseString = function(str) {
    result = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newString = str.at(i);
        result = str.concat(newString);
    }
    return result;
};

console.log(reverseString('cat'));





// Do not edit below this line
module.exports = reverseString;
