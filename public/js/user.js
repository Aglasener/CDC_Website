$(document).ready(function(){
    var userContainer = $(".user-container");
    var url = window.location.search;
    var userId;
    
    if(url.indexOf("?id=") !== -1) {
        userId = url.split("=")[1];
        console.log(userId);
        getUser(userId);
    }
    

    function getUser(user) {
        var queryURL = "/api/user/" + user;
        
        $.get(queryURL, function (data) {
            console.log(data);
            initializeDisplay(data);
            
        });
    };

      
    function initializeDisplay(result) {
        console.log(result.total_score )
        userContainer.empty();

        var userCard = $(".user-container");
        userCard.addClass("card");
        var userCardHeading = $("<div>");
        userCardHeading.addClass("card-header");
        var userCardBody = $("<div>");
        userCardBody.addClass("card-body");
        
        var userName = $("<h2>");
        var userTotalScore = $("<h2>");

        var userAgeScore = $("<h3>");
        var userAlcoholScore = $("<h3>");
        var userTobaccoScore = $("<h3>");
        var userDrugScore = $("<h3>");
        var userObesityScore = $("<h3>");
        var userSexScore = $("<h3>");
        
        
        userName.text(result.first_name + " " + result.last_name);
        userTotalScore.text("Total Risk Score: " + result.total_score)
        userTotalScore.css({
            color: "blue",
            });

        userAgeScore.text("Age Risk Score: " + result.age_score);
        userAlcoholScore.text("Alcohol Risk Score: " + result.alcohol_score);
        userTobaccoScore.text("Tobacco Risk Score: " + result.tobacco_score);
        userDrugScore.text("Drug Risk Score: " + result.drug_score);
        userObesityScore.text("Obesity Risk Score: " + result.obesity_score);
        userSexScore.text("Unsafe Sex Risk Score: " + result.sex_score);

        userCardHeading.append(userName);
        userCardHeading.append(userTotalScore);

        userCardBody.append(userAgeScore);
        userCardBody.append(userAlcoholScore);
        userCardBody.append(userTobaccoScore);
        userCardBody.append(userDrugScore);
        userCardBody.append(userObesityScore);
        userCardBody.append(userSexScore);
        
        userCard.append(userCardHeading);
        userCard.append(userCardBody);
        
        return userCard;
    }

getUser()
});