"use strict";
const name=prompt('What Is Your Name?');
var gender=prompt('What Is Your Gender?(Male/Female)');

switch(gender) {
    case "male":
      break;
    case "female":
      break;
    default:
        gender=prompt('Please Enter Either Female Or Male'); 
  }
  let age=prompt('What Is Your Age?')
if (age<=0){
    alert("The Age Is Less Than Or Equal To Zero");
}

let hello=confirm("Are You Want To Skip The Welcoming Message?")
 if(!hello){
     if(gender=="male"){
        alert("Hello Mr "+ name)
   }else if (gender=="female"){
        alert("Hello Mrs "+ name)}
       else {
           alert("Hello "+ name)}
        }

        let SchedulerTask=prompt("Do You Like To Scheduler Your Tasks Daily?")
        if(SchedulerTask==""){
         SchedulerTask= prompt('Invalid Answer Please Enter Either Yes or No')
        }
        switch(SchedulerTask) {
          case "yes":
            break;
          case "no":
            break;
          default:
              SchedulerTask=prompt('Please Enter Either Yes Or No'); 
        }

        let TryToDoList=prompt("Have You Ever Use Any Todo-List Web Applecations ?")
        if(TryToDoList==""){
         TryToDoList= prompt('Invalid Answer Please Enter Either Yes Or No')
        }
        switch(TryToDoList) {
          case "yes":
            break;
          case "no":
            break;
          default:
              TryToDoList=prompt('Please Enter Either Yes or No'); 
        }
        let Ready=prompt("Are You Ready To Try Our ToDo-List Applecation")
        if(Ready==""){
          Ready= prompt('Invalid Answer Please Enter Either Yes or No')
         }
         switch(Ready) {
           case "yes":
             break;
           case "no":
             break;
           default:
               Ready=prompt('Please Enter Either Yes Or No'); }

let Input=[SchedulerTask,TryToDoList,Ready]
               for (let i=0;i<=2;i++){
                console.log(Input[i])
               }