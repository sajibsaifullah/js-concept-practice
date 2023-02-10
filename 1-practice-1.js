/* var number = 30;
var name = "Sajib";
var isHappy = true; */

/* for (let i = 1; i <= 100; i++){
    console.log(i);
}
 */

/* let num = 1;
while (num <= 100) {
    console.log(num);
    num++;
}
 */

/* for (let i = 51; i <= 80; i += 2){
    console.log(i);
} */


/* function sumThreeNumber(number1, number2, number3) {
    sum = number1 + number2 + number3;
    console.log(sum);
    return sum;
}
sumThreeNumber(10, 20, 30); */

function sumOfNumbers(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        console.log(i, element, sum);
    }
    return sum;
}
let myNumbers = [10, 20, 30];
// let sumNumber = sumOfNumbers(myNumbers);
let getSum = sumOfNumbers(myNumbers);
console.log('Sum Of three numbers: ' ,getSum);