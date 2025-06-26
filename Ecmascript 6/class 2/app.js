// const obj = {
//     username : "saylani",
//     edu: "Web"
// }
// obj = {
//     username : "smit",
//     edu: "mobile"
// }
// console.log(obj)


// var obj2 = {
//     ...obj
// }
// obj2 = obj
// obj2.abc = "abcd"
// console.log(obj)
// const fruits = ["apple", "mango"]
// fruits = ['banana', 'orange']
// fruits[0] = "banana"
// fruits[1] = "orange"
// console.log(fruits)

// --------------------------------------------------------------------------
// template literals
// let abc = "abcd"
// let def = "12345"
// document.writeln(`value first is ${abc} <br> value second is ${def}`)
// document.writeln(abc + " " + "<br>" + def)



// ----------------------------------------------------------------------------
// arrow functions

// let sum = (a, b, ...c) => a + b + c 

// let getValue = sum(10, 90, 20, 30, 40, 50, 60)

// document.writeln(getValue)

// let sum = (a, b) => {
//     return a + b
// }
// let getValue = sum(20, 20)
// document.writeln(getValue)

// function sum(a, b){
//     return a + b
// }
// let getValue = sum(10, 20)
// document.writeln(getValue)

// -----------------------------------------------------------
// Rest Parameters
// function sum(...c) {
//     let abc = 0
//     for(var i=0; i < c.length; i++){
//         abc += c[i]
//     }
//     return abc
// }
// let getValue = sum(10, 20, 30, 40, 50, 60, 50, 703, 23)
// console.log(getValue)

// ---------------------------------------------------
// default parameters
// let abc = (a=20) => a
// let getValue = abc()
// console.log(getValue) 