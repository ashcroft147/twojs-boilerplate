import * as d3 from 'd3';

// 4. Rect Size Represents
d3.select("#graphic").append("div")
        .text("5.Reference Material Represantation");

d3.select("#graphic").append("div")
        .attr("id", "ref_rect");


// Set Margin Config
const margin = {top : 30, right : 0, bottom : 0, left : 30};

var viewPortWidth = 1200 - margin.left - margin.right;
var viewPortHeight = 180 - margin.top - margin.bottom;

var svg5 = d3.select("#ref_rect").append("svg")
        .attr("width", viewPortWidth + margin.left + margin.right)
        .attr("height", viewPortHeight + margin.top + margin.bottom);

var group_1 = svg5.append("g")
        .attr("transfrom", "translate(" + 300 + "," + 200+ ")");

// Type 2
svg5.append("defs").append("pattern")
            .attr('id', 'pattern-bottom-ref')
            .attr('x', 0)
            .attr('y', 0)            
            .attr('width', 4)
            .attr('height', 4)            
            .attr('patternUnits', 'userSpaceOnUse')
            .append('path')
            .attr('d', 'M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2')
            .attr('stroke', 'blue')
            .attr('stroke-width', 0.5);

// 1. reference Material
var ref_rect_main = group_1.append("rect")
                    .style('fill', "#pattern-bottom-ref")
                    .style("stroke-dasharray", ("3, 3"))  // <== This line here!!
                    .style("stroke","#000000")
                    .style("opacity", .3)                    
                    .attr("id", "rect_main")
                    .attr("x", 10 + margin.left)
                    .attr("y", 10 + margin.top)
                    .attr("width", 217)
                    .attr("height", 100);

var rect_left = group_1.append("rect")
                    .style('fill', 'red')
                    .attr("x", 10 + margin.left)
                    .attr("y", 90 + margin.top)
                    .attr("width", 20)
                    .attr("height", 20)
                    .style("stroke","#000000");

var rect_right = group_1.append("rect")
                    .style('fill', 'blue')
                    .attr("x", 207 + margin.left)
                    .attr("y", 10 + margin.top)
                    .attr("width", 20)
                    .attr("height", 20)
                    .style("stroke","#000000");