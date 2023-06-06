'use strict';




let inputName = prompt("Please enter your name", "mohammad Darwish");

let gender = prompt("Please enter your gender", "male");
    while (!(gender=="male" || gender=="female")) {
        gender= prompt("Please enter your gender ,please be either male or female", "male");
    }


let age = prompt("Please enter your Age", 25);
    while (age <= 0) {
        age = prompt("Please enter your Age again, should be above zero.", 25);
    }
   

//Lab Six Solution Start From Here 

let QuestionAnswers=[];

let QuestionAnswersCheck=(answer)=>{
    while (!(answer== "Yes" || answer== "No" || answer== "")) {
        answer=prompt("your Answer should be either Yes ,No Or empty");
    }

    if(answer == "Yes" || answer == "No" ){
        QuestionAnswers.push(answer)
    }else{
        QuestionAnswers.push("invalid")
    }

}

let PrintQuestionAnswers=(arr)=>{
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);  
    }
}

let firstQuestion=prompt("Are you jordanian?");
    QuestionAnswersCheck(firstQuestion);
    let secondQuestion=prompt("Are you live in amman?");
    QuestionAnswersCheck(secondQuestion);
    let thiredQuestion=prompt("Are you developer?");
    QuestionAnswersCheck(thiredQuestion);

    PrintQuestionAnswers(QuestionAnswers);

/*
I fixed Confirmation Box From Lab Five At The End 
So We Can Include The Lab Six Questions With The Confirmation Box
*/
    let confirmation;
    if (confirm("confirm if you want to skip the welcoming message.")) {
        confirmation = "You pressed OK!";
      } else if (gender=="male") {
        confirmation=window.alert("Welcome Mr."+ inputName);
      }
      else{
        confirmation=window.alert("Welcome Ms."+ inputName);
      }