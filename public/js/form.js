var firstName = $("#firstName");
var lastName = $("#lastName");
var birthday = $("#birthMonth").val().trim() + $("#birthDay").val().trim() + $("#birthYear").val().trim();
var state = $("#state");
var gender = $("#gender");
var drugScore = 0;
var sexScore = 0;
var tobaccoScore = 0;

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
        alcohol:
        .val()
        .trim(),
        tobacco_use: tobaccoValue()
        .trim(),
        drug_use: drugValue()
        .trim(),
        obesity: 10.0,
        safe_sex: sexValue()
        .trim(),
    }

    var alcoholScore = 
    var ageScore = 
    var tobaccoScore = 
    var drugScore = 
    var sexScore = 
    var totalScore = 
    
    var newResult = {
        alcohol_score: alcoholScore.val().trim(),
        age_score: ageScore.val().trim(),
        tobacco_score: tobaccoScore.val().trim(),
        drug_score: drugScore.val().trim(),
        obesity_score: 10,
        sex_score: sexScore.val().trim(),
        total_score: totalScore
    }
}

