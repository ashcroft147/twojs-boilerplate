import * as d3 from 'd3';

// 3. Edge Rect
d3.select("#graphic").append("div")
        .text("3.Edge Rect inside Container Rect");

d3.select("#graphic").append("div")
        .attr("id", "edge-rect");

var svg = d3.select("#edge-rect").append("svg")
        .attr("width", 1200)
        .attr("height", 150);

// Container
var rect_container = svg.append("rect")
                            .style('fill', 'yellow')
                            .attr("x", 10)
                            .attr("y", 10)
                            .attr("width", 200)
                            .attr("height", 100)
                            .style("stroke","#000000");

var rect_left = svg.append("rect")
                    .style('fill', 'red')
                    .attr("x", 10)
                    .attr("y", 90)
                    .attr("width", 20)
                    .attr("height", 20)
                    .style("stroke","#000000");

var rect_right = svg.append("rect")
                    .style('fill', 'blue')
                    .attr("x", 190)
                    .attr("y", 10)
                    .attr("width", 20)
                    .attr("height", 20)
                    .style("stroke","#000000");
                           
svg.append('text').style('fill', 'black')
                        .attr('x', 70)
                        .attr('y', 130)
                        .text('Rect in Rect');