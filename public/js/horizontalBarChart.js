
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
// Setting margins of chart
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
var y = d3.scaleLinear()
    .domain([0, d3.max(data, function(d){ return d.value})]).nice()
    .range([height - margin.bottom, margin.top]);

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
    .call(d3.axisBottom(x).tickFormat(i => data[i].name).tickSizeOuter(0))


    
// Chart creations function 

function HBarChart() {
var chart = d3.select(".horizChart")
    //.attr("viewbox", [0, 0, width, height])
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  
var bar = chart.selectAll("g")
        .data(data)
    .enter().append("g")


bar.append("rect").transition().delay(function(d, i) { return i * 150 })
        .attr("width", x.bandwidth())
        .attr("height", d => y(0) - y(d.value))
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



      