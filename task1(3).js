// First Task
// First way
function drawTriangle(number, figure){
    let raw = "";
    for (let i = 0; i < number; i++){
        raw += figure;
        console.log(raw);
    }
};
drawTriangle(5, "*");

// Second way
function drawTriangle(number, figure){
    let i = 0;
    let raw = "";
    while (i < number){
        raw += figure;
        console.log(raw);
        i++;
    }
};
drawTriangle(5, "*");