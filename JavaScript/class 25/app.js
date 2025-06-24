let allUsers = [];

let users = localStorage.getItem('users');

if (users !== null) {
    allUsers = JSON.parse(users)
}

// document.writeln(allUsers)

function signup() {
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let user = {
        name: name.value,
        email: email.value,
        password: password.value
    }

    allUsers.push(user)
    localStorage.setItem('users', JSON.stringify(allUsers))
}


function login() {
    let email = document.getElementById('email');
    let password = document.getElementById('password');

    var filterUser = allUsers.filter(function (data) {
        return data.email == email.value && data.password == password.value
    })

    if(filterUser.length){
        alert('login success')
    }
    else{
        alert('no Data Found for this user')
    }


    // console.log(filterUser)

    // let filterUser = allUsers.filter(data => data.email === email.value && data.password === password.value);
    // if (filterUser.length) {
    //     alert("user login succesful")
    // } else {
    //     alert("email/password incorrect")
    // }
}