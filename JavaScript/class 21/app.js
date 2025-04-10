// var student = {
//   s_id: "01",
//   s_name: "ali",
//   s_sec: "yellow",
//   s_hobbies: ["cricket", "swimming", "coding"],
//   print: function () {
//     console.log(this)
//     return student.s_id + student.s_sec
//     // return this.s_id +  this.s_sec
//   },

//   //   work: function(){
//   //     alert('its working')
//   //   }
// };

// student.print()

// document.writeln(student.print())

// student.work();

// for (var key in student) {
//   if (key == "s_hobbies") {
//     for (var i = 0; i < student.s_hobbies.length; i++) {
//       document.writeln(student.s_hobbies[i] + "<br>");
//     }
//   } else {
//     document.writeln(student[key] + "<br>");
//   }
// }
// console.log(student)

// var car = new Object()
// car.model = "2023"
// car.name = "civic"
// for(var key in car){
//     document.writeln(car[key])
// }
// document.writeln(car)

// var shaadi = {
//   mard: {
//     biwi1: "guddo",
//     biwi2: "razia",
//     biwi3: "parveen",
//     biwi4: "anjum",
//   },
// };
// document.writeln(shaadi.mard.biwi2 + " aaj apka number hai")


// var obj = {
//     id: "01",
//     roll: "123"
// }
// console.log(obj)
// console.log("roll" in obj)


function Students(id, name, age, roll){
    this.id = id,
    this.name = name,
    this.age = age,
    this.roll = roll
}

var s1 = new Students(1, 'ali', 25, '123')
var s2 = new Students(11, 'aliya', 26, '12345')
var s3 = new Students(111, 'alishba', 27, '123456')

console.log(s3)


















