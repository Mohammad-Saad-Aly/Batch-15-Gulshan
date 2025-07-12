// let obj = {
//     id:'01',
//     name: 'ali',
//     address: {
//         first: 'Garden',
//         second: 'Saylani'
//     }
// }
// console.log(obj?.address?.third?.fourth)

// let eq = 5 === "5" ? "okay hai" : "nahi okay" 
// console.log(eq)

// class Student{
//     constructor(id, name, age, roll){
//         this.id = id
//         this.name = name
//         this.age = age
//         this.roll = roll
//     }
// }

// let stud1 = new Student('01', 'Ali', '25', "abcd")
// console.log(stud1)

// let num1 = 2
// let num2 = 100
// let eq = Math.pow(num1, num2)
// console.log(eq)
// console.log(3 ** 3)


// let fruits = ['apple', 'banana', 'peach', undefined]
// let ab = fruits[Symbol.iterator]();

// console.log(ab.next())
// console.log(ab.next())
// console.log(ab.next())
// console.log(ab.next())
// ab.next()



// for(let a of fruits){
//     console.log(a);
// }

// function *girls(){
//     yield "sharabi"
//     yield "gulaabi"
//     yield "harami"
//     yield "ammi ki pasand"
// }

// let ab = girls()
// console.log(ab.next())
// console.log(ab.next())
// console.log(ab.next())
// console.log(ab.next())
// console.log(ab.next())

// let user = "username"
// let name1 = "Saad"
// let obj = {
//     name1,
//     [user] : "Saad ali",
//     show(){
//         return "abcd"
//     }
// }
// console.log(obj.show())

// function outer() {
//     let username = "smit"

//     function inner() {
//         let money = "1000000"
//         console.log(username)
//     }
//     inner()

//     console.log(money)

// }
// outer()


function bachi(){
    let secret_pictures = "send notes..."

    return function scrollImages(){
        console.log("uski yaadein "+ secret_pictures)
    }

}

let ab = bachi()
console.log(ab())











