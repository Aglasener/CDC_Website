var firstName = $("#firstName");
var lastName = $("#lastName");
var age = $("#age").val().trim();
var state = $("#state");
var gender = $("#gender");
var drugScore = 0;
var sexScore = 0;
var tobaccoScore = 0;
var alcoholScore = $("#alcohol-form");


function drugValue () {
    
    if ($("#opiods").checked = true){
        drugScore+= 8;
    }
    if ($("#heroin").checked = true){
        drugScore+= 8;
    }
    if ($("#crack").checked = true){
        drugScore+= 8;
    }
    if ($("#pyschostimulant").checked = true){
        drugScore+= 8;
    }
    return drugScore;
}

function sexValue () {
    if ($("#sex1").checked = true){
        sexScore+= 15;
    }
    else {
        sexScore = 0;
    }
    return sexScore;
}

function tobaccoValue () {
    if ($("#tobaccoYes").checked = true){
        tobaccoScore+= 20;
    }
    else {
        tobaccoScore - 0;
    }
    return tobaccoScore;
}

function ageValue(){
    var ageScore;
    if (age<=19){
        ageScore=3;
    }
    else if(age>19 && age<=35){
        ageScore=6;
    }
    else if(age>35 && age<=45){
        ageScore=9;
    }
    else if(age>45 && age<=60){
        ageScore=12;
    }
    else{
        ageScore=15;
    }
    return ageScore;

}

function totalScore(){
    var score = Number(alcoholScore.val()) + 
                ageValue() +
                tobaccoValue() +
                drugValue() +
                10 +
                sexValue();  

    return score;
}


$(".form-submit").on("click", handleFormSubmit);
console.log("work");

function handleFormSubmit(event) {
    event.preventDefault();

    var newUser = {
        first_name: firstName
        .val()
        .trim(),
        last_name: lastName
        .val()
        .trim(),
        DOB: age
        .trim(),
        state: state
        .val(),
        gender: gender
        .val(),
        alcohol: Number(alcoholScore
        .val()),
        tobacco_use: tobaccoValue(),
        drug_use: drugValue(),
        obesity: 10,
        safe_sex: sexValue()
        
    }

    var newResult = {
        alcohol_score: Number(alcoholScore.val()),
        age_score: ageValue(),
        tobacco_score: tobaccoValue(),
        drug_score: drugValue(),
        obesity_score: 10,
        sex_score: sexValue(),
        total_score: totalScore()
    }
    submitUser(newUser);

}



function submitUser(user) {
    $.post("/api/user", user, function() {
        window.location.href = "/user";
    });
    $.post("")
  }
//   function submitResult(result) {
//     $.post("/api/user", result, function() {
//       window.location.href = "/user";
//     });
//   }
