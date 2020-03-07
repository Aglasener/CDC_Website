var firstName = $("#firstName");
var lastName = $("#lastName");
var birthday = $("#birthMonth").val().trim() + $("#birthDay").val().trim() + $("#birthYear").val().trim();
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
    var year = $("#birthYear").val().trim();
    var age = 2020 - Number(year);
    return age;
}

function totalScore(){
    var score = Number(alcoholScore.val().trim()) + 
                ageValue().trim() +
                tobaccoValue().trim() +
                drugValue().trim() +
                10 +
                sexValue().trim(),    
    return score;
}

function handleFormSubit(event) {
    event.preventDefault();

    var newUser = {
        first_name: firstName
        .val()
        .trim(),
        last_name: lastName
        .val()
        .trim(),
        DOB: birthday
        .trim(),
        state: state
        .val()
        .trim(),
        gender: gender
        .val()
        .trim(),
        alcohol: Number(alcoholScore
        .val()
        .trim()),
        tobacco_use: tobaccoValue()
        .trim(),
        drug_use: drugValue()
        .trim(),
        obesity: 10,
        safe_sex: sexValue()
        .trim(),
    }

    var newResult = {
        alcohol_score: Number(alcoholScore.val().trim()),
        age_score: ageValue().trim(),
        tobacco_score: tobaccoValue().trim(),
        drug_score: drugValue().trim(),
        obesity_score: 10,
        sex_score: sexValue().trim(),
        total_score: totalScore().trim()
    }
}

submitUser(newUser);

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
