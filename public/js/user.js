$(document).ready(function(){
    var userContainer = $(".user-container");
    var url = window.location.search;
    var userId;
    
    if(url.indexOf("?id=") !== -1) {
        userId = url.split("=")[1];
        getUser(userId);
    }
    

    function getUser(user) {
        userId = "/?id=" + user;
        $.get("/api/user" + userId, function (data) {
            console.log("User", data);
            user=data;

            initializeDisplay(user);
            
        });
    };

      
    function initializeDisplay(result) {
        userContainer.empty();

        var userCard = $("<div>");
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
        var userPhysicalScore = $("<h3>");
        var userSexScore = $("<h3>");
        
        
        userName.text(result.User.first_name + " " + result.User.last_name);
        userTotalScore.text("Total Risk Score: " + result.total_score)
        userTotalScore.css({
            float: "right",
            color: "blue",
            "margin-top":
            "-10px"
        });

        userAgeScore.text("Age Risk Score: " + result.age_score);
        userAlcoholScore.text("Alcohol Risk Score: " + result.alcohol_score);
        userTobaccoScore.text("Tobacco Risk Score: " + result.tobacco_score);
        userDrugScore.text("Drug Risk Score: " + result.drug_score);
        userObesityScore.text("Obesity Risk Score: " + result.obesity_score);
        userPhysicalScore.text("Physical Activty Score: " + result.physical_score);
        userSexScore.text("Unsafe Sex Risk Score: " + result.sex_score);

        userCardHeading.append(userName);
        userCardHeading.append(userTotalScore);

        userCardBody.append(userAgeScore);
        userCardBody.append("/n" + userAlcoholScore);
        userCardBody.append("/n" + userTobaccoScore);
        userCardBody.append("/n" + userDrugScore);
        userCardBody.append("/n" + userObesityScore);
        userCardBody.append("/n" + userPhysicalScore);
        userCardBody.append("/n" + userSexScore);
        
        userCard.append(userCardHeading);
        userCard.append(userCardBody);
        
        return userCard;
    }
});