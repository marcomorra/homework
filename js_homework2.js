let age = Number(prompt("Скільки вам років?"));
if (age <= 0) {
    console.log("Вік не може бути нульовим або від'ємним")
} else if (age % 10 === 1 && age !== 11){
    console.log("Вам " + age + " рік")
} else if (age % 10 === 2 || age % 10 === 3 || age % 10 === 4){
    console.log("Вам " + age + " роки")
} else if (age % 10 === 5 || age % 10 === 6 || age % 10 === 7 || age % 10 === 8 || age % 10 === 9 || age % 10 === 0 || age === 11){
    console.log("Вам " + age + " років")
} else {
    console.log("Приймаються тільки цілі числа. Спробуйте ще.")
};
