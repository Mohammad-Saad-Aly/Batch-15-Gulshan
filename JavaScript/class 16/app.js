<<<<<<< HEAD
// reading values
// function foo(){
//     var getInp = document.getElementById('inp')
//     console.log(getInp.value)
// }

// setting values
// function foo(){
//     var getInp = document.getElementById('inp')
//     getInp.value = 'hello world'
// }

// function imgchange(){
//     var img = 'https://media.istockphoto.com/id/1681388313/vector/cute-baby-panda-cartoon-on-white-background.jpg?s=612x612&w=0&k=20&c=qFrzn8TqONiSfwevvkYhys1z80NAmDfw3o-HRdwX0d8='
//     var tt = document.getElementById('tt')
//     tt.src = ''
//     // tt.src = img
// }

// function foo(){
//     var getImg = document.getElementById('img')
//     getImg.className += ' tt'
// }
=======
// var colorName = prompt("Enter any color name");

// if (colorName) {
//   document.body.style.backgroundColor = colorName;
// }

// switch (colorName) {
//   case colorName:
//     document.body.style.backgroundColor = colorName;
//     break;
//   default:
//     alert("Invalid color name");
// }

// field ==> .value
// text  ==> .innerText, .innerHTML, .textContent
// img   ==> .src

// function onBulb(){
//     var getBulb = document.getElementById("bulb")
//     getBulb.src = 'https://www.freeiconspng.com/thumbs/lightbulb-png/light-bulb-png-bulb-png1247-12.png'
//     getBulb.setAttribute('width','30%')
// }

// function offBulb(){
//     var getBulb = document.getElementById("bulb")
//     getBulb.src = 'https://pngimg.com/d/bulb_PNG1243.png'
//     getBulb.setAttribute('width','30%')
// }

function onoff() {
  var getBulb = document.getElementById("bulb");
  if (
    getBulb.src ==
    "https://www.freeiconspng.com/thumbs/lightbulb-png/light-bulb-png-bulb-png1247-12.png"
  ) {
    getBulb.src = "https://pngimg.com/d/bulb_PNG1243.png";
  } else {
    getBulb.src =
      "https://www.freeiconspng.com/thumbs/lightbulb-png/light-bulb-png-bulb-png1247-12.png";
  }
}
>>>>>>> 0545e667f5449ce25ae8941599ce3b123c28da80
