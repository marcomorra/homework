// Second task
function checkProbabilityTheory(count){
    let even = 0;
    let uneven = 0;
    for (let i = 0; i < count; i++){
        let rnd = Math.round(Math.random() * 900) + 100;
        if (rnd % 2 === 0){
            even++;
        } else {
            uneven++;
        }
    };
    let evenPer = Math.round((even / count) * 100);
    let unevenPer = Math.round((uneven / count) * 100);
    console.log("Кількість згенерованих чисел: " + count);
    console.log("Парних чисел: " + even);
    console.log("Не парних чисел: " + uneven);
    console.log("Відсоток парних до не парних: " + evenPer + "% / " + unevenPer + "%");
};
checkProbabilityTheory(20);