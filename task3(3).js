// Third task
function pow(x, y){
    let z = 1;
    for (let i = 0; i < y; i++){
        z *= x;
    }
    return z;
};
console.log(pow(4, 5));