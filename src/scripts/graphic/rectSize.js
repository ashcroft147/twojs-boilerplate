import * as d3 from 'd3';

// 4. Rect Size Represents
d3.select("#graphic").append("div")
        .text("4.Rect Size Representation");

d3.select("#graphic").append("div")
        .attr("id", "rect_size");

var svg4 = d3.select("#rect_size").append("svg")
        .attr("width", 1200)
        .attr("height", 150);

// Container
var rect_main = svg4.append("rect")
                    .style('fill', 'yellow')
                    .attr("x", 10)
                    .attr("y", 10)
                    .attr("width", 200)
                    .attr("height", 100)
                    .style("stroke","#000000");                 

var rect_left = svg4.append("rect")
                    .style('fill', 'red')
                    .attr("x", 10)
                    .attr("y", 90)
                    .attr("width", 20)
                    .attr("height", 20)
                    .style("stroke","#000000");

var rect_right = svg4.append("rect")
                    .style('fill', 'blue')
                    .attr("x", 190)
                    .attr("y", 10)
                    .attr("width", 20)
                    .attr("height", 20)
                    .style("stroke","#000000");
                           
svg4.append('text').style('fill', 'blac')
                        .attr('x', 75)
                        .attr('y', 130)
                        .text('Rect Size');


// horizontal rect size line 
svg4.append("line").style('stroke', '#000000')
                .style("stroke-dasharray", ("3, 3"))  // <== This line here!!
                .attr("x1", 300)     // x position of the first end of the line
                .attr("y1", 100)      // y position of the first end of the line
                .attr("x2", 500)     // x position of the second end of the line
                .attr("y2", 100);    // y position of the second end of the line

svg4.append("line").style('stroke', '#000000')
                .attr("x1", 300)     // x position of the first end of the line
                .attr("y1", 95)      // y position of the first end of the line
                .attr("x2", 300)     // x position of the second end of the line
                .attr("y2", 105);    // y position of the second end of the line

svg4.append("line").style('stroke', '#000000')
                .attr("x1", 500)     // x position of the first end of the line
                .attr("y1", 95)      // y position of the first end of the line
                .attr("x2", 500)     // x position of the second end of the line
                .attr("y2", 105);    // y position of the second end of the line            
                
                
// vertical rect size line 
svg4.append("line").style('stroke', '#000000')
                .style("stroke-dasharray", ("3, 3"))  // <== This line here!!
                .attr("x1", 250)     // x position of the first end of the line
                .attr("y1", 10)      // y position of the first end of the line
                .attr("x2", 250)     // x position of the second end of the line
                .attr("y2", 110);    // y position of the second end of the line

svg4.append("line").style('stroke', '#000000')
                .attr("x1", 300)     // x position of the first end of the line
                .attr("y1", 95)      // y position of the first end of the line
                .attr("x2", 300)     // x position of the second end of the line
                .attr("y2", 105);    // y position of the second end of the line

svg4.append("line").style('stroke', '#000000')
                .attr("x1", 500)     // x position of the first end of the line
                .attr("y1", 95)      // y position of the first end of the line
                .attr("x2", 500)     // x position of the second end of the line
                .attr("y2", 105);    // y position of the second end of the line            
                