var a= 5;
var b= 10;

function add(x, y) {
    return x+y;
}
console.log(add(a, b)); 

function sub(x, y) {
    return x-y;
}
console.log(sub(a, b)); 

function mult(x, y) {
    return x*y;
}
console.log(mult(a, b)); 

function divide(x, y) {
    return x*y;
}
console.log(divide(a, b)); 

var firstArray=[one,two,three];
var secondArray=[four,five,six];
var thirdArray=[seven,eight,nine];

function pushAnArray (argumentOne, argumenttwo) {
  argumentOne.push(argumentTwo);
  return argumentOne
}
console.log(pushAnArray(firstArray,secondArray))

function shiftAnArray(argumentA){
    argumentA.shift();
    return argumentA
}

function (popAnArray(argumentAlpha){
    argumentAlpha.pop()
    return argumentAlpha
}

console.log(popAnArray(thirdArry))