var data = [
    {name: "Joe", value: 10},
    {name: "Moses", value: 5},
    {name: "Nisa", value: 7},
    {name: "Eman", value: 15},
].sort((a, b) => b.value - a.value )

 console.log(data.length)
// d3.select("body").transition()
//     .style("background-color", "LightGreen")

// Barchart
// Setting chart margins
var margin = {
  top: 30,
  right: 0,
  bottom: 10,
  left: 40
}

// setting inner dimensions of chart and bar width by subtracting out the margins
var barHeight = 30;
var width = 600 - margin.left - margin.right;
var height = data.length * barHeight + margin.top + margin.bottom;


// Setting x and y scales of the chart. Here, y will be used to sort, x will be numeric scale
var x = d3.scaleLinear()
    .domain([0, d3.max(data, function(d){ return d.value})])
    .range([margin.left, width - margin.right]);

var y = d3.scaleBand()
    .domain(d3.range(data.length))
    .range([margin.top, height - margin.bottom ])
    .padding(0);

    console.log(y(10))
// build our x and y AXIS that will perform sorting and add stylized scale to chart
var xAxis = g => g
    .attr("transform", "translate(0," + margin.top + ")")
    .call(d3.axisTop(x).ticks(width / 80))
    .call(g => g.select(".domain").remove());

var yAxis = g => g
    .attr("transform", "translate("+ margin.left +",0)")
    .call(d3.axisLeft(y).tickFormat(i => data[i].name).tickSizeOuter(0))


    
// Chart creations function 

function BarChart() {
var chart = d3.select(".chart")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height )
  


var bar = chart.selectAll("g")
        .data(data)
    .enter().append("g")
        .attr("transform", function(d, i) { return "translate(0," + i  + ")"; })

bar.append("rect").transition().delay(function(d, i) { return i * 150 })
        .attr("width", d => x(d.value) - x(0) )
        .attr("height", y.bandwidth())
        .attr("x", x(0))
        .attr("y", (d, i) => y(i))
    
bar.append("text")
    .attr("x", d => x(d.value) - 4)
    .attr("y", (d, i) => y(i) + y.bandwidth() / 2)
    .attr("dy", ".35em")
    .text(function (d) { return d.value; });

chart.append("g").call(xAxis);
chart.append("g")
      .call(yAxis);


}




      