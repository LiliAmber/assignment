"use strict"

const a = +process.argv[2]
const b = +process.argv[3]
// console.log(a)
mainJs()
function mainJs() {
    if(a > b) {
        console.log("Sum: ", Sum(a,b))
        console.log("Difference: ", Difference(a,b))
        console.log("Product: ", Product(a,b))
        console.log("Quotient: ", Quotient(a,b))
        console.log("Reminder: ", Reminder(a,b))
        console.log("Value of num1 after increment: ", Increment(a))
        console.log("Value of num2 after decrement: ", Decrement(b))
    }
    else {
        return console.log("first value must be bigger then second value")
    }
}

function Sum(num1, num2) {
    let result = num1 + num2
    return result
}

function Difference(num1, num2) {
    let result = Math.abs(num1 - num2)
    return result
}

function Product(num1, num2) {
    let result = num1 * num2
    return result
}

function Quotient(num1, num2){
    let result = Math.abs(num1 / num2)
    return result
}

function Reminder(num1, num2){
    let result = num1 % num2
    return result
}

function Increment(num1) {
    let result = num1 + 1
    return result
}

function Decrement(num2){
    let result = num2 - 1
    return result
}