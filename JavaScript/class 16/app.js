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
