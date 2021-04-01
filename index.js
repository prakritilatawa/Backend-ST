// function number(){
//     var x;
//     x = document.getElementById("lname").value;
//     if(isNaN(x) || x<1 || x>10){
//         alert("Please enter valid Mobile number");
//     }
// }

// function nameLength(t){
   
var v = document.getElementById("fname").value;

function checkName(v) {
    const regex = /^[a-zA-Z]{3,50}/
    if (v.match(regex)) 
        return true;
    else 
        return false;
    }