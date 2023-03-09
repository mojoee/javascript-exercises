const removeFromArray = function(arr, ...args) {
    var arrayLength = args.length
    for (var i=0; i<arrayLength; i++){
    var index = arr.indexOf(args[i])
    if (index===-1){continue;}
    arr.splice(index, 1)
    }

    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
