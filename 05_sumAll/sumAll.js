const sumAll = function(lower, upper) {
    if (!(Number.isInteger(lower) && Number.isInteger(upper))){return "ERROR";}
    if (lower<0 || upper<0){return "ERROR";}
    if (lower>upper) {
        let store=lower
        lower=upper
        upper=store
    }
    let sum = 0;
    for (let index = lower; index <= upper; index++) {
        sum+=index;
        
    }
    return sum

};

// Do not edit below this line
module.exports = sumAll;
