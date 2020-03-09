$(document).ready(function(){
 
  var url = window.location.search;
  var userId;
  if(url.indexOf("?id=") !== -1) {
      userId = url.split("=")[1];
      getUser(userId);
  }

const key = "cd2rpbjy5noro8o4vwvoxbdpi3yaa2ync433cv24bs956nwn3slkqkp4ciaowcdko8mndnr35ax";
var dataObject = [];
var risk

var margin = {
  top: 20,
  right: 0,
  bottom: 30,
  left: 30
}



    
// Chart creations function 

function HBarChart(dataObject, state) {

    var dataObject = dataObject.filter(function (el) {
      return el.value > 0
      }).sort((a, b) => b.value - a.value ) 
    console.log(dataObject)
    // setting inner dimensions of chart and bar width by subtracting out the margins
    var width = 900 ;
    var height = 300 ;


    // Setting x and y scales of the chart. Here, y will be used to sort, x will be numeric scale
    var y = d3.scaleLinear()
        .domain([0, d3.max(dataObject, function(d){ return d.value})]).nice()
        .range([height - margin.bottom,  margin.top]);

    var x = d3.scaleBand()
        .domain(d3.range(dataObject.length))
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
        .call(d3.axisBottom(x).tickFormat(i => dataObject[i].name).tickSizeOuter(0))

    var chart = d3.select(".horizChart1")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      
    var bar = chart.selectAll("g")
            .data(dataObject)
        .enter().append("g")
            //.attr("transform", function(d, i) { return "translate(0," + i  + ")"; })

    bar.append("rect").transition().delay(function(d, i) { return i * 75 })
            .attr("width", x.bandwidth())
            .attr("height", d => y(0) - y(d.value))
            .attr("y", d => y(d.value))
            .attr("x", (d, i) => x(i))
            //.attr("fill", function(d,i) { if(d.name == state) { return "orange"} }   )
        
    bar.append("text").transition().delay(function(d, i) { return i * 75 })
        .attr("y", d => y(d.value) - 4)
        .attr("x", (d, i) => x(i) + x.bandwidth() / 2)
        .attr("dx", ".35em")
        .text(function (d) { return d.value; });

    chart.append("g").call(xAxis).selectAll("text").attr("transform", "rotate(90)").style("text-anchor", "start").attr("x", 9).attr("y", 0) ;
    chart.append("g").call(yAxis);

    chart.append("text")
        .attr("x", width * .6)             
        .attr("y", 0 + margin.top)
        .attr("text-anchor", "middle")  
        .style("font-size", "16px") 
        .style("text-decoration", "underline")  
        .text("Obesity Rates by State, 2018");

};

function HBarChart2(dataObject) {
  var dataObject = dataObject.filter(function (el) {
    return el.value > 0
    }).sort((a, b) => b.value - a.value ) 
  console.log(dataObject)
  // setting inner dimensions of chart and bar width by subtracting out the margins
  var width = 900 ;
  var height = 300 ;
  
  
  // Setting x and y scales of the chart. Here, y will be used to sort, x will be numeric scale
  var y = d3.scaleLinear()
      .domain([0, d3.max(dataObject, function(d){ return d.value})]).nice()
      .range([height - margin.bottom,  margin.top]);
  
  var x = d3.scaleBand()
      .domain(d3.range(dataObject.length))
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
      .call(d3.axisBottom(x).tickFormat(i => dataObject[i].name).tickSizeOuter(0))
  
  var chart = d3.select(".horizChart2")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    
  var bar = chart.selectAll("g")
          .data(dataObject)
      .enter().append("g")
          //.attr("transform", function(d, i) { return "translate(0," + i  + ")"; })
  
  bar.append("rect").transition().delay(function(d, i) { return i * 150 })
          .attr("width", x.bandwidth())
          .attr("height", d => y(0) - y(d.value))
          .attr("y", d => y(d.value))
          .attr("x", (d, i) => x(i))
          //.attr("fill", function(d,i) { if(d.name == "Moses") { return "orange"} }   )
      
  bar.append("text").transition().delay(function(d, i) { return i * 150 })
      .attr("y", d => y(d.value) - 4)
      .attr("x", (d, i) => x(i) + x.bandwidth() * .5)
      .attr("dx", ".35em")
      .text(function (d) { return d.value; });
  
  chart.append("g").call(xAxis).selectAll("text").attr("transform", "rotate(50)").style("text-anchor", "start").attr("x", 9).attr("y", 0) ;
  chart.append("g").call(yAxis);

  chart.append("text")
        .attr("x", width * .6)             
        .attr("y", 0 + margin.top)
        .attr("text-anchor", "middle")  
        .style("font-size", "16px") 
        .style("text-decoration", "underline")  
        .text("Drug Overdoses, 2019");
    
}
 
  function HBarChart3(dataObject) {
    var dataObject = dataObject.filter(function (el) {
      return el.value > 0
    }).sort((a, b) => b.value - a.value)
    console.log(dataObject)
    // setting inner dimensions of chart and bar width by subtracting out the margins
    var width = 900;
    var height = 300;

    var margin = {
      top: 20,
      right: 0,
      bottom: 30,
      left: 40
    }
    // Setting x and y scales of the chart. Here, y will be used to sort, x will be numeric scale
    var y = d3.scaleLinear()
      .domain([0, d3.max(dataObject, function (d) { return d.value })]).nice()
      .range([height - margin.bottom, margin.top]);

    var x = d3.scaleBand()
      .domain(d3.range(dataObject.length))
      .range([margin.left, width - margin.right])
      .padding(0.1);

    console.log(y(10))
    // build our x and y AXIS that will perform sorting and add stylized scale to chart
    var yAxis = g => g
      .attr("transform", "translate(" + margin.left + ",0)")
      .call(d3.axisLeft(y))
      .call(g => g.select(".domain").remove());

    var xAxis = g => g
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x).tickFormat(i => dataObject[i].name).tickSizeOuter(0))

    var chart = d3.select(".horizChart3")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)

    var bar = chart.selectAll("g")
      .data(dataObject)
      .enter().append("g")
    //.attr("transform", function(d, i) { return "translate(0," + i  + ")"; })

    bar.append("rect").transition().delay(function (d, i) { return i * 150 })
      .attr("width", x.bandwidth())
      .attr("height", d => y(0) - y(d.value))
      .attr("y", d => y(d.value))
      .attr("x", (d, i) => x(i))
      //.attr("fill", function (d, i) { if (d.name == "Moses") { return "orange" } })

    bar.append("text").transition().delay(function (d, i) { return i * 150 })
      .attr("y", d => y(d.value) - 4)
      .attr("x", (d, i) => x(i) + x.bandwidth() * .5 )
      .attr("dx", ".35em")
      .text(function (d) { return d.value; });

    chart.append("g").call(xAxis).selectAll("text").attr("transform", "rotate(50)").style("text-anchor", "start").attr("x", 9).attr("y", 0);
    chart.append("g").call(yAxis);

    chart.append("text")
        .attr("x", width * .75)             
        .attr("y", 0 + margin.top)
        .attr("text-anchor", "middle")  
        .style("font-size", "16px") 
        .style("text-decoration", "underline")  
        .text("Age Adjusted Death Rate per 100,000 Individuals, 2019");

}

function Donut(risk){ 

  var tau = 2 * Math.PI;
  
  var arc = d3.arc()
      .innerRadius(70)
      .outerRadius(100)
      .startAngle(0);
  
  var svg = d3.select(".donut"),
      width = +svg.attr("width"),
      height = +svg.attr("height"),
      g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
  
  var background = g.append("path")
      .datum({ endAngle: tau })
      .style("fill", "#ddd")
      .attr("d", arc);
  
  var foreground = g.append("path")
      .datum({ endAngle: 0 * tau })
      .style("fill", "orange")
      .attr("d", arc);
  
  var score = svg.append("text")
          .text(risk)
          .attr("font-size", "30px")
          .attr("x", "232px")
          .attr("y", "152px");

  var title = svg.append("text")
          .text("Risk Score")
          .attr("font-size", "30px")
          .attr("x", width / 2.6)
          .attr("y", "40px");
  
  foreground.transition().duration(1500).attrTween("d", arcTween((risk / 100) * tau))
  
  
  function arcTween(newAngle) {
  

      return function(d) {

        var interpolate = d3.interpolate(d.endAngle, newAngle);
 
        return function(t) {

          d.endAngle = interpolate(t);

          return arc(d);
        };
      };
    }
  }


var obesityData = function(data) {
  dataObject = [];
    for (let i = 0; i < data.length; i++){
        dataObject.push({"name": data[i].locationabbr, "value": Number(data[i].data_value)});
        };
    console.log(dataObject);
    
    return dataObject;
};

var overdoseData = function(data) {
  dataObject = [];
    for (let i = 0; i < data.length; i++){
        dataObject.push({"name": data[i].indicator, "value": Number(data[i].data_value)});
        };
    console.log("Overdose Output", dataObject);
      
    return dataObject;
    };

var deathData = function(data) {
  dataObject = [];
    for (let i = 0; i < data.length; i++){
        dataObject.push({"name": data[i].cause_name, "value": Number(data[i].aadr)});
    };
    console.log("Death Output", dataObject);    
    return dataObject;
}


var getObesity = function(gender, state) {
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
        console.log("Obesity Data", data);
        console.log(gender);
        console.log(state);
        obesityData(data);
        HBarChart(dataObject, state)
        console.log(dataObject)
        
      });
    };
var getOverdose = function(state) {
        var queryURL = "https://data.cdc.gov/resource/xkb8-kh2a.json?year=2019&month=February&state_name=" + state + "&$where=indicator in('Cocaine (T40.5)', 'Heroin (T40.1)'," + escape("'Natural & semi-synthetic opioids (T40.2)'") +  ",'Opioids (T40.0-T40.4,T40.6)', 'Psychostimulants with abuse potential (T43.6)', 'Synthetic opioids, excl. methadone (T40.4)', 'Methadone (T40.3)')";
      return $.ajax({
        url: queryURL,
        headers: {'Authorization': 'Basic ' + key,},
        method: "GET",
        data: {
          "$limit" : 5000
      }
    }).done(function(data) {
        console.log("Retrieved " + data.length + " records from the dataset!");
        console.log("Overdose data", data);
        console.log(state)
        overdoseData(data)
        HBarChart2(dataObject);
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
        console.log("Death Cause Data", data);

        deathData(data);
        HBarChart3(dataObject)
      });
    };

function renderGraphs(state,gender){
    getObesity(gender, state);
    getOverdose(state);
    getDeathCause(state);
}


function getUser(user) {
  userId = "/" + user;
  $.get("/api/user" + userId, function (data) {
      console.log(data);
      console.log(data.state);
      console.log(data.gender);
      var state = data.state;
      var gender = data.gender;
      var risk = data.total_score
      renderGraphs(state,gender);
      Donut(risk)
  });
};


});