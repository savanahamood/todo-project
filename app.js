"use strict";
var name=prompt('what is your name?');
var gender=prompt('what is your gender?(male/female)');
switch(gender) {
    case "male":
      break;
    case "female":
      break;
    default:
        gender=prompt('please enter either female or male'); 
  }
  let age=prompt('what is your age?')
if (age<=0){
    alert("the age is less than or equal to zero");
}
let hello=confirm("are you want to skip the welcoming message?")
 if(!hello){
     if(gender=="male"){
        alert("Hello Mr "+ name)
   }else if (gender=="female"){
        alert("Hello Mrs "+ name)}
       else {
           alert("Hello "+ name)}
        }