// First task
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function myBlend(arr) {
    return arr.sort(function(a, b) {
        return Math.random() - 0.5;
    });
};

console.log(myBlend(arr));