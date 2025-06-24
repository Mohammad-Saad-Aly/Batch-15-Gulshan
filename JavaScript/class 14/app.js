// function first(){
//     var a = "smit"
//     var b = "saylani"
//     return [a,b]
// }
// function second(){
//     console.log(first()[0,1])
// }
// second()

// function foo(){
//     alert('bache soo rahe hein ....')
// }

// function foo(){
//     var getInp = document.getElementById('inp')
//     alert(getInp.value)
// }


function btnClick(a){
    var getInp = document.getElementById("inp")
    getInp.value += a 
}

function eq(){
    var getInp = document.getElementById('inp')
    getInp.value = eval(getInp.value)
}

function clrall(){
    var getInp = document.getElementById('inp')
    getInp.value = ''
}

function clr(){
    var getInp = document.getElementById('inp')
    getInp.value = getInp.value.slice(0,-1)
}