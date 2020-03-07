var firstName = $("#firstName");
var lastName = $("#lastName");
var age = $("#age").val().trim();
var state = $("#state");
var gender = $("#gender");

function drugValue () {
    var drugScore = 0;
    if ($("#opiods").checked = true){
        drugScore+= 8;
    }
    if ($("#heroin").checked = true){
        drugScore+= 4;
    }
    if ($("#crack").checked = true){
        drugScore+= 2;
    }
    if ($("#pyschostimulant").checked = true){
        drugScore+= 1;
    }
    return drugScore;
}

function sexValue () {
    var sexScore = 0;
    if ($("#sex1").checked = true){
        sexScore = 15;
        return sexScore;
    }
    else {
        sexScore = 0;
        return sexScore;
    }
    
}

function tobaccoValue () {
    var tobaccoScore = 0;

    if ($("#tobaccoYes").checked = true){
        tobaccoScore = 20;
        return tobaccoScore;
    }
    else {
        tobaccoScore = 0;
        return tobaccoScore;
    }
    
}

function alcoholValue () {
    var alcoholScore = 0;

    if ($("#alcohol1").checked = true){
        alcoholScore = 0;
        return alcoholScore;
    }
    else if ($("#alcohol2").checked = true){
        alcoholScore = 7;
        return alcoholScore;
    }
    else {
        alcoholScore = 15;
        return alcoholScore;
    }
    
}


function ageValue(){
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
    var score = alcoholValue() + 
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
        DOB: Number(ageValue()),
        state: state
        .val(),
        gender: gender
        .val(),
        alcohol: alcoholValue(),
        tobacco_use: tobaccoValue(),
        drug_use: drugValue(),
        obesity: 10,
        safe_sex: sexValue(),  
        alcohol_score: alcoholValue(),
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
        window.location.href ="/user";
    });

  }
  
