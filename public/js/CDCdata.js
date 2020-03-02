const key = "cd2rpbjy5noro8o4vwvoxbdpi3yaa2ync433cv24bs956nwn3slkqkp4ciaowcdko8mndnr35ax";
const token = "CzSCTrcN334qZt5LqR6LcazVtZWvY-5aMjiCJ9S4cRXVL_qGa2LQz4DSh33T7";

var API = {
    getObesity: function(state, gender) {
        var queryURL = "https://chronicdata.cdc.gov/resource/hn4x-zwk7.json?gender=" + gender + "&locationdesc=" + state + "&questionid=Q036";
      return $.ajax({
        url: queryURL,
        headers: {'Authorization': 'Basic ' + key,},
        method: "GET",
        data: {
          "$limit" : 5000,
          "$$app_token" : "token"
      }
    }).done(function(data) {
        console.log("Retrieved " + data.length + " records from the dataset!");
        console.log(data);
      });
    },
    getOverdose: function(state) {
        var queryURL = "https://data.cdc.gov/resource/xkb8-kh2a.json?state_name=" + state;
      return $.ajax({
        url: queryURL,
        headers: {'Authorization': 'Basic ' + key,},
        method: "GET",
        data: {
          "$limit" : 5000,
          "$$app_token" : "token"
      }
    }).done(function(data) {
        console.log("Retrieved " + data.length + " records from the dataset!");
        console.log(data);
      });
    },
    getDeathCause: function(state) {
        var queryURL = "https://data.cdc.gov/resource/bi63-dtpu.json?state=" + state;
      return $.ajax({
        url: queryURL,
        headers: {'Authorization': 'Basic ' + key,},
        method: "GET",
        data: {
          "$limit" : 5000,
          "$$app_token" : "token"
      }
    }).done(function(data) {
        console.log("Retrieved " + data.length + " records from the dataset!");
        console.log(data);
      });
    },
  };
  
  