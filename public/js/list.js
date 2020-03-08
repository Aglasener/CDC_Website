$(document).ready(function() {
    var usersContainer = $(".users-container");
    $(document).on("click", "button.view", handleUserView);
    var users;
    getUsers();

    function getUsers() {
        $.get("/api/user", function (data) {
            console.log("Users", data);
            users=data;

            if (!users || !users.length) {
                displayEmpty();
            }
            else {
                initializeRows();
            }
        });
    };

 
    function initializeRows() {
        usersContainer.empty();
        var usersToAdd = [];
        for (var i = 0; i < users.length; i++) {
            usersToAdd.push(createNewRow(users[i]));
        }
        usersContainer.prepend(usersToAdd);
    };

  
    function createNewRow(User) {
        
        var newUserCard = $("<div>");
        newUserCard.addClass("card");
        var newUserCardHeading = $("<div>");
        newUserCardHeading.addClass("card-header");
        var viewBtn = $("<button>");
        viewBtn.text("VIEW");
        viewBtn.addClass("view btn btn-info");
        var newUserName = $("<h2>");
        var newUserScore = $("<h3>");
        var newUserGender = $("<h3>");
        
        var newUserCardBody = $("<div>");
        newUserCardBody.addClass("card-body");
        newUserName.text(User.first_name + " " + User.last_name);
        newUserScore.text("Risk Score: " + User.total_score);
        newUserGender.text(User.gender);
        newUserCardHeading.append(viewBtn);
        newUserCardHeading.append(newUserName);
        newUserCardBody.append(newUserScore);
        newUserCardBody.append(newUserGender);
        newUserCard.append(newUserCardHeading);
        newUserCard.append(newUserCardBody);
        newUserCard.data("user", User);
        return newUserCard;
    }

  

 
    function handleUserView() {
        var currentUser = $(this)
        .parent()
        .parent()
        .data("user");
        window.location.href = "/user?id=" + currentUser.id;
    }

    
    function displayEmpty() {
        usersContainer.empty();
        var messageH2 = $("<h2>");
        messageH2.css({ "text-align": "center", "margin-top": "50px" });
        messageH2.html("No Users yet");
        usersContainer.append(messageH2);
    }

});