// var num = 2
// num *= "abcd"
// num = num + 10
// document.write(num)

// var num1 = 2;
// var num2 = 3;
// var eq = num1 + 10 + num2++ - num2++;
//   2  +10 +   3    -  4
// document.write(eq);

// var value1 = parseInt(prompt("Enter any number"))
// var value1 = Number(prompt("Enter any number"))
// var value1 = +prompt("Enter any number")
// document.write(typeof(value1))

// var value2 = prompt("Enter any number")
// var sum = value1 + value2

// var value1 = +prompt("Enter any value")
// var value2 = +prompt("Enter any value")
// var sum = value1 + value2
// document.write(sum)

// > greater than
// < less than
// <= less than or equals to
// >= greater than or equals to
// == euqals to (sirf value) check krega
// === strictly equals to (datatype or value) dono check krega
// != not equals to
// !== strictly not equals to
// = assignment operator

// if(5 != "4"){
//     document.write("OK")
// }

// if
// if else
// if else if

// var myNum = 5
// var userInp = +prompt("Enter any number")

// if(userInp == myNum){
//     document.write(`i guess ${myNum} and you guess ${userInp}`)
// }
// else if (userInp == 6){
//     document.write(`i guess ${myNum} and you guess ${userInp} thatswhy you are close enough`)
// }
// else if(userInp == 4){
//     document.write(`i guess ${myNum} and you guess ${userInp} thats why you are close enough`)
// }
// else{
//     document.write(`i guess ${myNum} and you guess ${userInp} thats why you are wrong`)
// }

var username = prompt("Enter your name");
var maths = +prompt("Enter maths marks");
var eng = +prompt("Enter English marks");
var urdu = +prompt("Enter Urdu marks");
var bio = +prompt("Enter Bio marks");
var cs = +prompt("Enter Computer marks");
var marksObtained = maths + eng + urdu + bio + cs;
var perc = (marksObtained / 500) * 100;
var grade;

if(perc >= 80){
    grade = "A+"
}
else if(perc >= 70){
    grade = "A"
}
else if(perc >= 60){
    grade = "B"
}
else if(perc >= 50){
    grade = "C"
}
else if(perc >= 40){
    grade = "D"
}
else{
    grade = "Fail"
}



document.write(
    `<table border='2px'> 
    <tr> 
    <th> NAME </th>
    <th> MATHS </th>
    <th> ENGLISH </th>
    <th> URDU </th>
    <th> BIO </th>
    <th> CS </th>
    <th> Obtained Marks </th>
    <th> PERCENTAGE </th>
    <th> GRADE </th>
    </tr>

    <tr> 
    <td> ${username} </td>
    <td> ${maths} </td>
    <td> ${eng} </td>
    <td> ${urdu} </td>
    <td> ${bio} </td>
    <td> ${cs} </td>
    <td> ${marksObtained} / 500 </td>
    <td> ${perc.toFixed(2)} </td>
    <td> ${grade} </td>
    </tr>
    </table>`
)





