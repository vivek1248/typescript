var user = /** @class */ (function () {
    function user(email, password) {
        this.email = email;
        this.password = password;
        this.city = "bhvnager";
    }
    return user;
}());
var vivek = new user("vivek", "1234");
console.log(vivek.email, vivek.password);
