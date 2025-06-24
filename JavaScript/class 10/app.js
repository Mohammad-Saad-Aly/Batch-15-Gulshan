// var str = 'saylani'
// document.write(str.charAt(9))
// var check = Math.floor(Math.random() * 11)

// var num = 80.999
// var check = Math.floor(num)
// document.write(check)

// document.write(typeof(num.toString()))

// var num = Math.random() * 2
// document.write(num.toFixed(2))

// var date = new Date().toString()
// var copy = date.slice(16,24)
// document.write(copy)

// var date = new Date().getMonth()
// document.write(date)

// var days = ["sun", "mon", "tues", "wed", "thurs", "fri", "sat"];
// var day = new Date().getDay();
// document.write(days[day]);

// var date = new Date('12 sep, 2025').getTime()
// document.write(date)

document.write("<center> <h1> AGE CALCULATOR  </h1> </center>");

var present = new Date().getTime();
var dob = new Date(prompt("Enter your Date of Birth")).getTime();
var age = present - dob;
var finalAge = age / (1000 * 60 * 60 * 24 * 365);
document.write(`Your age is: ${Math.floor(finalAge)}`);
