// First task
function checkNan(value){
    if (value !== value){
        console.log("Введене значення є NaN");
    } else {
        console.log("Введене значення не є NaN");
    };
    return;
}
checkNan(NaN);
