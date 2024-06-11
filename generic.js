"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// generic in typescript 
function add_number(val1) {
    return val1;
}
console.log(add_number(1.1));
// generic arrow function in ts 
function seaech(argument) {
    return argument[2];
}
var value = function (argument) { return argument[2]; };
var vivek = { lname: "baraiya", fname: "vivek", data: "1/2/2024" };
function print(argument1, argument2) {
    return {
        argument1: argument1,
        argument2: argument2
    };
}
console.log(print(1, vivek));
// generic classes
