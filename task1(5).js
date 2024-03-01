// 1st Task
let car = {
    colour: "Blue",
    body: "Hatchback",
    transmission: "Auto",
    getInfo: function(){
        for (let i in this){
            if (typeof this[i] !== 'function') {
                console.log(i + ": " + this[i]);
            }
        }
    }
}
car.getInfo();
car.seats = 5; 
car.fuel = "petrol";
car.getInfo();





