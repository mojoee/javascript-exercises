const repeatString = function(input_string, n) {
if (n<0){
return "ERROR"
}
let result=""
for (let i=n; i>0; i--){
    result+=input_string
}
return result
};

// Do not edit below this line
module.exports = repeatString;
