function getPara(){
    var text = "hello world"
    var para = document.getElementById("para")
    para.innerText = text
    var getAnc = document.getElementById('anc')
    getAnc.innerText = ''
    var second = document.getElementById('anc2')
    second.style.display = 'block'
}