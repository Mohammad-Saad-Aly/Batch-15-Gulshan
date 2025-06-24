// document.writeln(document.childNodes[1].childNodes[0].childNodes[5].textContent = 'saylani')
// junk artifacts
// var getUl = document.getElementById('ul')
// console.log(getUl)
// console.log(getUl.lastChild.textContent = "abcd")

// crud operations
// create, read, update, delete

var getUl = document.querySelector("#ul");
var getInp = document.querySelector("#inp");

function addTodo() {
  if (getInp.value == "") {
    alert("please input some value");
  } else {
    getUl.innerHTML += `<li> ${getInp.value} <button onclick='edit(this)'> Edit </button> <button onclick='del(this)'> Delete </button> </li>`;
    getInp.value = "";
  }
}

function delall() {
  getUl.innerHTML = "";
}

function edit(e) {
  var pro = prompt("Enter updated value", e.parentNode.firstChild.textContent);
  e.parentNode.firstChild.textContent = pro;
}


function del(e){
    e.parentNode.remove()
}