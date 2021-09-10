const reverseString = function(str) {
    let hold = "";
    for(let i = 1; i <= str.length; i++){
        hold+=str[str.length-i]
    }
    return hold;
};
// best soloution
// srting.split('').reverse().join('');
module.exports = reverseString;
