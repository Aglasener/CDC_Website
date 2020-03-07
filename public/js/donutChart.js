//var risk = 7

// Include this div in the html
// <svg class="donut" width = "500" height = "300"></svg>

function Donut(){ 

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
        .attr("y", "152px")

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
  
Donut(risk)