function add(n1:number, n2:number, res:boolean, str:string){

    let addition=n1+n2;
    console.log(str+addition);
}
let num=7.8;
let num2=52;
let result=true;
let str="the result is  ";

add(num, num2,result,str);

//object types and array types

const person:{
    name:string;
    age:number;
    hobbies:string[];
    role:[number, string];
}={
    name:"Raveendra",
    age:27,
    hobbies:["Cricket", "Swimming", "Reading"],
    role:[2, "Coder"]                           //tuples
}
console.log(person.name+" "+person.age);
for(const hobby of person.hobbies){
    console.log(hobby);
}
for(const r of person.role){
    console.log(r);
}

let activities:string[];
activities=["Novels"];
activities.push("Movies");
activities.push("Web Series");

for(const act of activities){
    console.log(act);
}

//enum

enum Access{ADMIN=3, READ_ONLY="Read Only", AUTHOR=9};

let job=9;

if(job===Access.ADMIN){
    console.log("Is a Admin");
}else if(job===Access.AUTHOR){
    console.log("Is a Author");
}else{
    console.log("Is Read only");
}
//Union Types
function comb(
    no1:number|string,
    no2:number|string
){
    let r:any;
    if(typeof no1=== "number" && typeof no2 === "number"){
        r=no1+no2;
    }else{
        r=no1.toString()+no2.toString();
    }
    return r;
}

let combineNo=comb(25,26);
console.log(combineNo);

let combineNames=comb("Ryan", "Reynolds");
console.log(combineNames);

//Literal Types

function combine(
    number1:number|string,
    number2:number|string,
    resultConversion:"asNumber"|"asText"
){
    let res:any;
    if(typeof number1==="number"&& typeof number2=== "number" || resultConversion==="asNumber"){
        res= +number1 + +number2;
    }else{
        res= number1.toString() + number2.toString();
    }
    return res;
}
let combinedAges=combine(20,25,"asNumber");
console.log(combinedAges);
let combinedStrAges=combine("26","28", "asNumber");
console.log(combinedStrAges);
let combinedNames=combine("Blake","Ryan","asText");
console.log(combinedNames);

//type aliases
type Ravi= string | boolean;
type Ryan= "asBoolean"|"asObject"; 

//Function Return types

function sum(a:number, b:number):number{
    return a+b;
}
function printResult(c:number):void{
    console.log("Result " +c);
}
printResult(sum(5,8));
console.log(sum(5,90));

let combineValues:(d:number, e:number)=>number;
combineValues=sum;
console.log(combineValues(6,6));
//combineValues=printResult; //error

//callback

function addAndHandle(g:number, h:number, cb:(e:number)=>void){
    const re=g+h;
    cb(re);
}
let resAddAndHandle=addAndHandle(8,8, (re)=>{
    console.log(re);
});

//unknown type
let userName:unknown;
let userInput:string;

userName=3;
userName="Ryan";
    //userInput=userName; //error
if(typeof userName=== "string"){
    userInput=userName;
    console.log(userInput);
}

//Never type
function generatedError(message:string, code:number):never{
    throw{ErrorMessage:message, errorCode:code};
    // while(true){}
}
generatedError("UserDefinedError", 400);