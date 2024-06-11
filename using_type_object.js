"use strict";
//simple javascript object
Object.defineProperty(exports, "__esModule", { value: true });
var obj = {
    name: "vivek baraiya",
    id: "22cp014"
};
// object using function 
function greet(user) {
    return "hellow" + user.name;
}
greet({ name: "vivek", id: 1234 });
function createuser(user) {
    return "user name is ".concat(user.fname, " ").concat(user.lname);
}
console.log(createuser({ fname: "vivek", lname: "baraiya", mobilenum: 123456 }));
var user = {
    _id: 123,
    fname: "vivek",
    lname: "baraiya",
};
