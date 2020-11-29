var secondMax = function (arr){ 
    var max = Math.max.apply(null, arr), // get the max of the array
        maxi = arr.indexOf(max);
    arr[maxi] = -Infinity; // replace max in the array with -infinity
    var secondMax = Math.max.apply(null, arr); // get the new max 
    arr[maxi] = max;
    return secondMax;
};
var arr = [20, 120, 111, 215, 54, 78]; // use int arrays
var max2 = secondMax(arr);
console.log(max2);
