var data1 = [
    {name: "Joe", risk: 10, age: 25},
    {name: "Jack", risk: 4, age: 45},
    {name: "Moses", risk: 6, age: 33},
    {name: "Eman", risk: 1, age: 34},
    {name: "Nisa", risk: 8, age: 60},
].sort((a, b) => b.risk - a.risk )


var margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

var x = d3.scaleLinear()
    .domain([0, 10])
    .range([0, width]);

var y = d3.scaleLinear()
    .domain([0, 70])
    .range([height, 0]);


function ScatterPlot(){
var svg = d3.select(".my_dataviz")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

svg.append("g")
    .call(d3.axisLeft(y));

svg.append('g')
    .selectAll("dot")
    .data(data1)
    .enter()
    .append("circle").transition().delay(function(d, i) { return i * 150 })
    .attr("cx", function (d) { return x(d.risk); })
    .attr("cy", function (d) { return y(d.age); })
    .attr("r", 5)
    .style("fill", "#69b3a2")
}
