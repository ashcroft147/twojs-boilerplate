import * as d3 from 'd3';

// 3. Edge Rect
d3.select("#graphic").append("div")
        .text("3.Edge Rect inside Container Rect");

d3.select("#graphic").append("div")
        .attr("id", "edge-rect");

var svg3 = d3.select("#edge-rect").append("svg")
        .attr("width", 1200)
        .attr("height", 150);

var rect_group = svg3.append("g");

// Container
var rect_container = rect_group.append("rect")
                            .style('fill', 'yellow')
                            .attr("x", 10)
                            .attr("y", 10)
                            .attr("width", 200)
                            .attr("height", 100)
                            .style("stroke","#000000")
                            .style("fill","url(#pattern-bottom)");

var rect_left = rect_group.append("rect")
                    .style('fill', 'red')
                    .attr("x", 10)
                    .attr("y", 90)
                    .attr("width", 20)
                    .attr("height", 20)
                    .style("stroke","#000000");

var rect_right = rect_group.append("rect")
                    .style('fill', 'blue')
                    .attr("x", 190)
                    .attr("y", 10)
                    .attr("width", 20)
                    .attr("height", 20)
                    .style("stroke","#000000");
                           
svg3.append('text').style('fill', 'black')
                        .attr('x', 70)
                        .attr('y', 130)
                        .text('Rect in Rect');