// var num = +prompt("Enter any number");

// switch (num) {
//   case 1:
//     document.write("ek number hai");
//     break;
//   case 2:
//     document.write("do number hai");
//     break;
//   case 3:
//     document.write("teen number hai");
//     break;
//   case 4:
//     document.write("chaar number hai");
//     break;
//   case 5:
//     document.write("paanch number hai");
//     break;
//   case 6:
//     document.write("chheh number hai");
//     break;
//   case 7:
//     document.write("saath number hai");
//     break;
//   case 8:
//     document.write("aath number hai");
//     break;
//   default:
//     document.write(num + " han yehi wala hai");
// }

// var jan = prompt("Enter any color name");

// switch (jan) {
//   case jan:
//     document.body.style.backgroundColor = jan;
//     break;
//   default:
//     document.body.style.backgroundColor = 'black'
// }

//   case jan:
//     document.body.style.backgroundColor = jan;
//     break;
//   case "red":
//     document.body.style.backgroundColor = "red";
//     break;

//   case "green":
//     document.body.style.backgroundColor = "green";
//     break;

//   case "pink":
//     document.body.style.backgroundColor = "pink";
//     break;

//   case "black":
//     document.body.style.backgroundColor = "black";
//     break;
//   default:
//     document.write(jan+ " tere baap ne color banaya hai ?")

// var i = 1

// while(i < 11){
//     document.write(i + "<br>")
//     i++
// }

// var num = 11
// do{
//     document.write(num)
//     num++
// }
// while(num < 10)

var prumpt = prompt("Enter table number")
var limit = prompt("Enter your limit")
var num = 1;

do {
  document.write(`${prumpt} x ${num} = ${num * prumpt} <br>`);
  num++;
} 

while (num <= limit);
