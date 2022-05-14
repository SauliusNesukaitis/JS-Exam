/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator(a, b) {
    this.a = a;
    this.b = b;
    this.sum = function sum(a, b) {
        console.log(a + b);
    };
    this.sub = function sub(a, b) {
        console.log(a - b);
    }
    this.mul = function mul(a, b) {
        console.log(a * b);
    }
    this.div = function div(a, b) {
        console.log(Math.round(a / b * 100) / 100);
    }
};
  
let calculator = new Calculator();

calculator.sum(4, 9)
calculator.sub(4, 9)
calculator.mul(4, 9)
calculator.div(4, 9)