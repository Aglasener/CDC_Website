function handleFormSubit(event) {
    event.preventDefault();

    var newUser = {
        first_name: firstName
        .val()
        .trim(),
        last_name: lastName
        .val()
        .trim(),
        DOB: new Date(birthday)
        .val()
        .trim(),
        gender: gender
        .val()
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
