// function check(){
// var btn = document.getElementById('green')
// btn.className = 'abc'
// var elem = document.getElementById('inp')
// var getBtn = document.getElementById('green')
// getBtn.setAttribute('class', 'btn btn-success')
// elem.setAttribute('class', 'form-control')
// elem.setAttribute('value', '12345')
// console.log(elem.getAttribute('name'))
// console.log(elem.hasAttribute('value'))
// }

var getUl = document.getElementById("ul");

function addTodo() {
  var getInp = document.getElementById("inp");

  getUl.innerHTML += `<li class='abc'> ${getInp.value} <span id='aaa'> <button> Delete </button> <button> Edit </button> </span> </li>`;

  // var li = document.createElement('li')
  // var liText = document.createTextNode(getInp.value)
  // li.appendChild(liText)
  // getUl.appendChild(li)
  // getInp.value = ''
  // li.setAttribute('class', 'abc')
  // var delBtn = document.createElement('button')
  // var delText = document.createTextNode('DELETE')
  // delBtn.appendChild(delText)
  // li.appendChild(delBtn)
}
// let arr = ['a','b','c','d']
// console.log(arr)

var obj = {
  pid: "01",
  pname: "AC",
  pcompany: "EcoStar",
  pprice: "117000",
};

for(var key in obj){
    document.writeln(`${key} : ${obj[key]} <br>`)
}

// document.writeln(obj.pcompany)

