function interest(principle, year, rate) {
    let interestCalc = principle * year * (rate/100);
    console.log('Interest is:', interestCalc);
    return interestCalc;
}

let inputPrinciple = 1000;
let inputYear = 10;
let inputRate = 10;

interest(inputPrinciple, inputYear, inputRate);