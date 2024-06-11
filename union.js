"use strict";
// more then one data type is possible of any variable using union
Object.defineProperty(exports, "__esModule", { value: true });
var name = "vivek";
var vivek = { name: "vivek baraiya", islogin: true, display: function () { return this.name; } };
//vivek={adminname:"vivek123" , islogin:false}
console.log(vivek.display());
function add(value1, value2) {
    if ((typeof value1 === "string") && (typeof value2 === "string")) {
        return value1.toUpperCase();
    }
    else if ((typeof value1 === "number") && (typeof value2 === "number")) {
        return value1 + value2;
    }
}
var arr = [];
var arr2 = [1, 2, 3];
arr2 = ["1", "2", "3",];
var arr3 = [1, 3, "2", true];
// how to give fixd value in ts
var airsets;
airsets = "front";
