const key = "cd2rpbjy5noro8o4vwvoxbdpi3yaa2ync433cv24bs956nwn3slkqkp4ciaowcdko8mndnr35ax";
var dataObject = [];
function chartSetup(dataSet, j) {
  var data = dataSet.sort((a,b) => b.value - a.value);
  var margin = {
    top: 20,
    right: 0,
    bottom: 30,
    left: 30
  }
  
  // setting inner dimensions of chart and bar width by subtracting out the margins
  var width = 500 - margin.left - margin.right;
  var height = 300 ;


  
  
  // Setting x and y scales of the chart. Here, y will be used to sort, x will be numeric scale
  var yMax = d3.max(data, function(d) {return d.value;});
  console.log(yMax)
  var y = d3.scaleLinear()
      .domain([0, yMax]).nice() 
      .range([height - margin.bottom, margin.top]);
 //function(d){ return d.value})]).nice() 
  var x = d3.scaleBand()
      .domain(d3.range(data.length))
      .range([margin.left, width - margin.right ])
      .padding(0.1);
  
      console.log(y(10))
  // build our x and y AXIS that will perform sorting and add stylized scale to chart
  var yAxis = g => g
      .attr("transform", "translate(" + margin.left + ",0)")
      .call(d3.axisLeft(y))
      .call(g => g.select(".domain").remove());
  
  var xAxis = g => g
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x).tickFormat(i => data[i].label).tickSizeOuter(0))
  
function HBarChart() {
  var chartSelect = "#horizChart" + j;
  var chart = d3.select(chartSelect)
      //.attr("viewbox", [0, 0, width, height])
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    
  var bar = chart.selectAll("g")
          .data(data)
      .enter().append("g")
          .attr("transform", function(d, i) { return "translate(0," + i  + ")"; })
  
  bar.append("rect").transition().delay(function(d, i) { return i * 150 })
          .attr("width", x.bandwidth())
          .attr("height", d => y(0)-y(d.value))
          .attr("y", d => y(d.value))
          .attr("x", (d, i) => x(i))
          .attr("fill", function(d,i) { if(d.name == "Moses") { return "orange"} }   )
      
  bar.append("text").transition().delay(function(d, i) { return i * 150 })
      .attr("y", d => y(d.value) - 4)
      .attr("x", (d, i) => x(i) + x.bandwidth() / 2)
      .attr("dx", ".35em")
      .text(function (d) { return d.value; });
  
  chart.append("g").call(xAxis);
  chart.append("g").call(yAxis);
  
  }

  HBarChart(data);
  }
      
  // Chart creations function 
  
  
  
  
var obesityData = function(data) {
  dataObject = [];
    for (let i = 0; i < data.length; i++){
        dataObject.push({"label": data[i].locationabbr, "value": Number(data[i].data_value)});
        };
    console.log(dataObject);
    
    return dataObject;
};

var overdoseData = function(data) {
  dataObject = [];
    for (let i = 0; i < data.length; i++){
        dataObject.push({"label": data[i].indicator, "value": Number(data[i].data_value)});
        };
    console.log(dataObject);
      
    return dataObject;
    };

var deathData = function(data) {
  dataObject = [];
    for (let i = 0; i < data.length; i++){
        dataObject.push({"label": data[i].cause_name, "value": Number(data[i].deaths)});
    };
    console.log(dataObject);    
    return dataObject;
}


var getObesity = function(gender) {
        var queryURL = "https://chronicdata.cdc.gov/resource/hn4x-zwk7.json?gender=" + gender + "&questionid=Q036&yearend=2018";
      return $.ajax({
        url: queryURL,
        headers: {'Authorization': 'Basic ' + key,},
        method: "GET",
        data: {
          "$limit" : 5000
      }
    }).done(function(data) {
        console.log("Retrieved " + data.length + " records from the dataset!");
        console.log(data);
        
        obesityData(data);
        chartSetup(dataObject, 1);
        
      });
    };
var getOverdose = function(state) {
        var queryURL = "https://data.cdc.gov/resource/xkb8-kh2a.json?year=2019&state_name=" + state;
      return $.ajax({
        url: queryURL,
        headers: {'Authorization': 'Basic ' + key,},
        method: "GET",
        data: {
          "$limit" : 5000
      }
    }).done(function(data) {
        console.log("Retrieved " + data.length + " records from the dataset!");
        console.log(data);

        overdoseData(data)
        chartSetup(dataObject, 2);
      });
    };
var getDeathCause = function(state) {
        var queryURL = "https://data.cdc.gov/resource/bi63-dtpu.json?year=2017&state=" + state;
      return $.ajax({
        url: queryURL,
        headers: {'Authorization': 'Basic ' + key,},
        method: "GET",
        data: {
          "$limit" : 5000
      }
    }).done(function(data) {
        console.log("Retrieved " + data.length + " records from the dataset!");
        console.log(data);

        deathData(data);
        chartSetup(dataObject, 3);
      });
    };

function renderGraphs(state,gender){
    getObesity(gender);
    getOverdose(state);
    getDeathCause(state);
}

renderGraphs("Alaska", "Male");


// function userSelect(id){
//     $.get("/api/users/" + id), function(data) {
//         var state = data.state;
//         var gender = data.gender;
//         renderGraphs(state,gender);
//     }
// };


// $("#user-list").on("click", ".user", function(event) {
//     event.preventDefault();
//     var id = this.id;
//     userSelect(id);
// })