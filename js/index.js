// for (let i = 0; i < 100; i++){
//     if (i === 0){
//         continue;
//     }
//     if (i % 2 === 0){
//     document.write(i);
//     document.write('<br>');       
//     }
// }
// let a = parseFloat(prompt('Enter a'));
// while (isNaN(a)){
//     alert('Please enter a number');
//     a = parseFloat(prompt('Enter a')); 
// }

// let a;
// do {
//   alert('Please enter a number');
//   a = parseFloat(prompt('Enter a')); 
// } while (isNaN(a));


let products = [];
products.push ( 'Tesla Model X'); //Number 0
products.push ( 'Tesla Model 3'); //Number 1
products.push ( 'Tesla Model S'); //Number 2
products.push ('VW Golf');//Number 3
console.log(products.length);
products[30] = "Chevy Camaro";
// console.log(products[3]);

// for (let i = 0; i < products.length; i++){
//     console.log(products[i]);
// }

// products.forEach(function(el){
//     console.log(el)
// });
products.forEach( el => console.log(el) );

function run() {
    console.log(`Car ${this.make} ${this.model} is running`);
}

let teslaX = {};
teslaX.make = 'Tesla';
teslaX.model = 'X';
teslaX.price = 100000;
teslaX.run = run;

teslaX.run();

let chevyCamaro = {
    make: 'Chevrolet',
    model: 'Camaro',
    price: 50000,
    run: run
};

chevyCamaro.run();

function Car(make, model, price) {
    this.make = make;
    this.model = model;
    this.price = price;
    this.run = run;
}

let hummer = new Car('GM', 'Hummer 1', 150000);
// let this = {}
hummer.run();

let hummer2 = Object.create(hummer);
hummer2.model = 'Hummer 2';
hummer2.run();

class SuperCar{
    constructor(make, model, price) {
        this.make = make;
        this.model = model;
        this.price = price;
        this.run = run;
    }
    run() {
        console.log(`Car ${this.make} ${this.model} is running`);
    }
}

let ferrari = new SuperCar('Ferrari', 'F430', 2000000);
ferrari.run();
