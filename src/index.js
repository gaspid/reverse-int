  
module.exports = function reverse (n) {
    if (n >= 0)
        return +("" + n).split("").reverse().join("");
    else
        return +("" + -n).split("").reverse().join("");
}
