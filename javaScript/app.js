let inputName = prompt("Please enter your name", "mohammad Darwish");

let gender = prompt("Please enter your gender", "male");
    if(gender=="male" || gender=="female"){
        gender=gender;
    }else{
        gender= prompt("Please enter your gender ,please be either male or female", "male");
    }


let age = prompt("Please enter your Age", 25);
    if(age >= 0){
        age=age;
    }else{
        window.alert("the age should be more than zero!");
        age = prompt("Please enter your Age again, should be above zero.", 25);
    }

let confirmation;
    if (confirm("confirm if you want to skip the welcoming message.")) {
        confirmation = "You pressed OK!";
      } else if (gender=="male") {
        confirmation=window.alert("Welcome Mr."+ inputName);
      }
      else{
        confirmation=window.alert("Welcome Ms."+ inputName);
      }