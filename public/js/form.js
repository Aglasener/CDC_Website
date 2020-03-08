var firstName = $("#firstName");
var lastName = $("#lastName");

var state = $("#state");
var gender = $("#gender");
var alcholPercentage = $("input[name='alcholPercentage']:checked").val()
var tobacco= $("input[name='tobacco']:checked").val()

console.log("THE ALCHOL PERCENTAGE", Number(alcholPercentage));
console.log(age);
console.log(tobacco)

function drugValue () {
    
    var drugScore = 0;
    if ($("input[name='drugPercentageValue']:checked").val() != undefined){
        console.log("THE VALUE", )
        drugScore+= 8;
    }
    if ($("input[name='drugPercentageHeroin']:checked").val() != undefined){
        drugScore+= 4;
    }
    if ($("input[name='drugPercentagecrack']:checked").val() != undefined){
        drugScore+= 2;
    }
  
    if ($("input[name='drugPercentagestimulant']:checked").val() != undefined){
        drugScore+= 1;
    }
    return drugScore;
}


    

/* function tobaccoValue () {
    var tobaccoScore = 0;

    if ($("#tobaccoYes").checked = true){
        tobaccoScore = 20;
        return tobaccoScore;
    }
    else {
        tobaccoScore = 0;
        return tobaccoScore;
    }
     d
} */

/* function alcoholValue () {
     
    var alcoholScore = 0;

    if ($("#alcohol1").attr('checked')){
        alcoholScore = 0;
        return alcoholScore;
        //return 0;
    }
    else if ($("#alcohol2").attr('checked')){
        alcoholScore = 7;
        return alcoholScore;
    }
    else {
        alcoholScore = 15;
        return alcoholScore;
    }
    
} */


function ageValue(){
    var age = $("#age").val();
    console.log(age);
    var ageScore;
    if (age<=19){
        ageScore="3";
    }
    else if(age>19 && age<=35){
        ageScore="6";
    }
    else if(age>35 && age<=45){
        ageScore="9";
    }
    else if(age>45 && age<=60){
        ageScore="12";
    }
    else{
        ageScore="15";
    }
    return parseInt(ageScore);
}

function totalScore(){
    var score = 0;
    var percentage = Number($("input[name='alcholPercentage']:checked").val())
    var sex = Number($("input[name='sex']:checked").val());
    var tobaccopoints = Number($("input[name='tobacco']:checked").val());
    score = percentage + 
            tobaccopoints +
                ageValue() +
                drugValue() +
                10 +
                sex;  

    return score;
}


$(".form-submit").on("click", handleFormSubmit);
console.log("work");

function handleFormSubmit(event) {
    event.preventDefault();
    console.log(age);
    var sex = $("input[name='sex']:checked").val();
    var newUser = {
        first_name: firstName
        .val()
        .trim(),
        last_name: lastName
        .val()
        .trim(),
        DOB: Number(ageValue()),
        state: state
        .val(),
        gender: gender
        .val(),
        alcohol:Number($("input[name='alcholPercentage']:checked").val()),
        tobacco_use: Number($("input[name='alcholPercentage']:checked").val()),
        drug_use: drugValue(),
        obesity: 10,
        safe_sex: sex,  
        alcohol_score: Number($("input[name='alcholPercentage']:checked").val()),
        age_score: ageValue(),
        tobacco_score: Number($("input[name='alcholPercentage']:checked").val()),
        drug_score: drugValue(),
        obesity_score: 10,
        sex_score: sex,
        total_score: totalScore()
    }
    submitUser(newUser);
    
}



function submitUser(user) {
    $.post("/api/user", user, function() {
         window.location.href ="/user";
    });
  } 
