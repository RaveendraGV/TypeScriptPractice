function add(n1, n2, res, str) {
    var addition = n1 + n2;
    console.log(str + addition);
}
var num = 7.8;
var num2 = 52;
var result = true;
var str = "the result is  ";
add(num, num2, result, str);
//object types and array types
var person = {
    name: "Raveendra",
    age: 27,
    hobbies: ["Cricket", "Swimming", "Reading"],
    role: [2, "Coder"] //tuples
};
console.log(person.name + " " + person.age);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
for (var _b = 0, _c = person.role; _b < _c.length; _b++) {
    var r = _c[_b];
    console.log(r);
}
var activities;
activities = ["Novels"];
activities.push("Movies");
activities.push("Web Series");
for (var _d = 0, activities_1 = activities; _d < activities_1.length; _d++) {
    var act = activities_1[_d];
    console.log(act);
}
//enum
var Access;
(function (Access) {
    Access[Access["ADMIN"] = 3] = "ADMIN";
    Access["READ_ONLY"] = "Read Only";
    Access[Access["AUTHOR"] = 9] = "AUTHOR";
})(Access || (Access = {}));
;
var job = 9;
if (job === Access.ADMIN) {
    console.log("Is a Admin");
}
else if (job === Access.AUTHOR) {
    console.log("Is a Author");
}
else {
    console.log("Is Read only");
}
//Union Types
function comb(no1, no2) {
    var r;
    if (typeof no1 === "number" && typeof no2 === "number") {
        r = no1 + no2;
    }
    else {
        r = no1.toString() + no2.toString();
    }
    return r;
}
var combineNo = comb(25, 26);
console.log(combineNo);
var combineNames = comb("Ryan", "Reynolds");
console.log(combineNames);
//Literal Types
function combine(number1, number2, resultConversion) {
    var res;
    if (typeof number1 === "number" && typeof number2 === "number" || resultConversion === "asNumber") {
        res = +number1 + +number2;
    }
    else {
        res = number1.toString() + number2.toString();
    }
    return res;
}
var combinedAges = combine(20, 25, "asNumber");
console.log(combinedAges);
var combinedStrAges = combine("26", "28", "asNumber");
console.log(combinedStrAges);
var combinedNames = combine("Blake", "Ryan", "asText");
console.log(combinedNames);
//Function Return types
function sum(a, b) {
    return a + b;
}
function printResult(c) {
    console.log("Result " + c);
}
printResult(sum(5, 8));
console.log(sum(5, 90));
var combineValues;
combineValues = sum;
console.log(combineValues(6, 6));
//combineValues=printResult; //error
//callback
function addAndHandle(g, h, cb) {
    var re = g + h;
    cb(re);
}
var resAddAndHandle = addAndHandle(8, 8, function (re) {
    console.log(re);
});
//unknown type
var userName;
var userInput;
userName = 3;
userName = "Ryan";
//userInput=userName; //error
if (typeof userName === "string") {
    userInput = userName;
    console.log(userInput);
}
//Never type
function generatedError(message, code) {
    throw { ErrorMessage: message, errorCode: code };
    // while(true){}
}
generatedError("UserDefinedError", 400);
