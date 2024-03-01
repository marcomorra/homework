// 2nd Task
var services = {
    "Стрижка": "60 грн",
    "Гоління": "80 грн",
    "Миття голови": "100 грн",
    price: function() {
        let count = 0;
        for (let i in this) {
            if (typeof this[i] !== 'function'){
                count += parseInt(this[i]);
            }
        }
        console.log("Загальна вартість наданих послуг: " + count + " грн.");
    },
    minPrice: function() {
        let minValue = Infinity;
        let key;
        for (let j in this) {
            if (typeof this[j] !== 'function'){
                let price = parseInt(this[j]);
                if (price < minValue){
                    minValue = price;
                    key = j;
                }
            }
        }
        console.log("Мінімальна ціна послуги: " + '"' + key + " - " + minValue + " грн." + '"')
    },
    maxPrice: function() {
        let maxValue = -Infinity;
        let key;
        for (let k in this) {
            if (typeof this[k] !== 'function'){
                let price = parseInt(this[k]);
                if (price > maxValue){
                    maxValue = price;
                    key = k;
                }
            }
        }
        console.log("Максимальна ціна послуги: " + '"' + key + " - " + maxValue + " грн." + '"');
    }
};

services.price();
services.minPrice();
services.maxPrice();
services['Розбити скло'] = "200 грн.";
services.price();
services.maxPrice();

