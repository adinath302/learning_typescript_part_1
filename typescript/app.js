// a = [1, 2, 3, 4, 5, 6, 7, 8];
// b = a;
// // primitive and refrence values
// 12  // -- primitive
// harsh // -- primitive
// sharma // -- primitive
// huhu // -- primitive
// true // -- primitive
// [] // -- refrence
// {} // -- refrence
// () // -- refrence
// "apple" // -- primitive
// false // -- primitive
// 12.34 // -- primitive
// ---
// var a= [1,2,3,4,5,6,];  // refrence
// var b= a; // it can't copy , it is refrence of a if you change in b it will change in a
// var a= 12;  // primitive
// a = b // you can copy it directly , it will not change in a
// --
// // primitive types --
// let a = 23; // primitive number
// let b = "key"; // primitive string
// let c = true; // primitive boolean
// --
// Array -
// let arrs = [];
// let arr = [1, 2, 3, "harsh"]; // string & number type array
// let arrd = [1, 2, 3, { name: "harsh" }, { number: 12 }]; // object with value of string & number & number type array
// --
// tuples - a special type of array that represents a fixed-length sequence of elements, where each element can have a specific, predetermined type and order
// let arr: [string, number] = ["harsh", 12]; // tuple example
// let arr2: [number, string] = [24, "harsh"];
// --
// enum ( enumerations) - uses for 
// var userroles;
// (function (userroles) {
//     userroles["ADMIN"] = "admin";
//     userroles["GUEST"] = "user";
//     userroles["SUPER_ADMIN"] = "super_admin";
// })(userroles || (userroles = {}));
// userroles.SUPER_ADMIN; // to use
// var statuscodes;
// (function (statuscodes) {
//     statuscodes["ABANDON"] = "abandund status code 500";
//     statuscodes["NOTFOUND"] = "not found status code 404";
// })(statuscodes || (statuscodes = {}));
// statuscodes.ABANDON; // to use
// console.log(statuscodes.ABANDON);
