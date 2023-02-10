/* function celsiusToFahrenheit(celsius) {
    let cTemp = celsius;
    let cToFahrenheit = (9 / 5 * cTemp) + 32;
    console.log('Fahrenheit value is:', cToFahrenheit);
    return cToFahrenheit;
}
let inputCelsiusTemp = 40;
celsiusToFahrenheit(inputCelsiusTemp); */


function FahrenheitToCelsius(fahrenheit) {
    let fTemp = fahrenheit;
    let FtoCelsius = (5 / 9) * (fahrenheit - 32);
    console.log("Celsius value is:", parseFloat(FtoCelsius.toFixed(2)));
    return FtoCelsius;
}
let fahrenheitTemp = 103;
FahrenheitToCelsius(fahrenheitTemp);