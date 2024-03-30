function divides(number1, number2) {
    var remainder = number1 % number2;
    var answer = Math.floor(number1 / number2);
    return { remainder: remainder, answer: answer };
}
console.log(divides(5, 3));
