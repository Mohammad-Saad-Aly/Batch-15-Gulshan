function signup() {
    var getName = document.getElementById('s-name').value
    var getEmail = document.getElementById('s-email').value
    var getPassword = document.getElementById('s-password').value
    localStorage.setItem('name', getName)
    localStorage.setItem('email', getEmail)
    localStorage.setItem('password', getPassword)
    location.href = './login.html'
}

function signin(){
    var getEmail = document.getElementById('l-email')
    var getPassword = document.getElementById('l-password')
    
    var getemailfromLS = localStorage.getItem('email')
    var getpasswordfromLS = localStorage.getItem('password')

    if(getEmail.value == getemailfromLS && getPassword.value == getpasswordfromLS){
        alert('User Signed In Successfully')
        location.href = './welcome.html'
    }
    else{
        alert('Invalid Credentials')
    }

}

function logout(){
    localStorage.clear()
    location.href = './index.html'
}