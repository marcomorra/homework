// Second task
let sum = 0;
for (let i = 0; i <= 100; i++){
    if (i % 3 === 0) continue;
    sum += i;
};
console.log("Сума чисел від 1 до 100 включно, яка не кратна 3 дорівнює " + sum);
