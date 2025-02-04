// var cities = ['karachi','lahore','islamabad','peshawar']

// for(var i=0; i < cities.length; i++){
//     document.write(cities[i] + "<br>")
// }

// var cars = ['BMW', 'revo', 'Mercedes', 'audi', 'mehran']
// var customer = prompt("Enter your desired car ? ")
// var match = false


// for(var i=0; i < cars.length; i++){
//     if(customer == cars[i]){
//         match = true
//         document.write(i,') car found')
//         break
//     }
// }

// if(match == false){
//     document.write("car not found")
// }

// var word = 'saylani'

// document.write(word.length-1)



var userInp = prompt("Enter any word")
var check = ''

for(var i= userInp.length-1; i >= 0; i--){
   check += userInp[i]
}

console.log(check)
console.log(userInp)

if(check == userInp){
    document.write('word is palindrome')
}
else{
    document.write('word is not palindrome')
}



