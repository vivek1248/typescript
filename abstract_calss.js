var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// abstract class dose not  make any object with that 
var user = /** @class */ (function () {
    function user(name, mobile_no, age) {
        this.name = name;
        this.mobile_no = mobile_no;
        this.age = age;
    }
    return user;
}());
var teacher = /** @class */ (function (_super) {
    __extends(teacher, _super);
    function teacher(name, mobile_no, age, role) {
        var _this = _super.call(this, name, mobile_no, age) || this;
        _this.role = role;
        return _this;
    }
    teacher.prototype.display_mobile_no = function () {
        console.log(this.mobile_no);
    };
    return teacher;
}(user));
var teacher1;
teacher1 = new teacher("vivek baraiya", 22222222, 23, "teacher");
teacher1.display_mobile_no();
