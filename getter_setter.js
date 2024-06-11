"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = /** @class */ (function () {
    function user(email, password) {
        this.city = "bhvnager";
        this._email = email;
        this._password = password;
    }
    Object.defineProperty(user.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (pera_email) {
            if (pera_email.indexOf('@') !== -1) {
                this._email = pera_email;
            }
            else {
                console.log("email is not valid");
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(user.prototype, "password", {
        set: function (new_pass) {
            if (new_pass.length > 5) {
                this._password = new_pass;
            }
            else {
                console.log("password is not valid");
            }
        },
        enumerable: false,
        configurable: true
    });
    return user;
}());
var user1;
user1 = new user("vivek@gmail.com", "123456789");
user1.email = "vivek123@";
user1.password = "123";
