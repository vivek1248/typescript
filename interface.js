"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user4 = { name: "vivek baraiya",
    age: 22,
    role: "learner",
    id: "22cp014",
    githubtoken: "git123",
    amount: 500,
    discount: 100, display: function () {
        console.log("welcome ".concat(this.name));
    }, calculate_price: function (amount, discount) {
        if (amount === void 0) { amount = this.amount; }
        if (discount === void 0) { discount = this.discount; }
        return amount - discount;
    }
};
user4.display();
console.log(user4.calculate_price(user4.amount, user4.discount));
