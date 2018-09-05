import * as d3 from 'd3';

// 4. Rect Size Represents
d3.select("#graphic").append("div")
        .text("4.Rect Size Representation");

d3.select("#graphic").append("div")
        .attr("id", "rect_size");

// Set Margin Config
const margin = {top : 30, right : 0, bottom : 0, left : 30};

var viewPortWidth = 1200 - margin.left - margin.right;
var viewPortHeight = 180 - margin.top - margin.bottom;

var g = d3.select("#rect_size").append("svg")
        .attr("width", viewPortWidth + margin.left + margin.right)
        .attr("height", viewPortHeight + margin.top + margin.bottom)
    .append("g")
        .attr("transfrom", "translate(" + 300 + "," + 200+ ")");

// Container
var rect_main = g.append("rect")
                    .style('fill', 'yellow')
                    .attr("id", "rect_main")
                    .attr("x", 10 + margin.left)
                    .attr("y", 10 + margin.top)
                    .attr("width", 217)
                    .attr("height", 100)
                    .style("stroke","#000000");                 

var rect_left = g.append("rect")
                    .style('fill', 'red')
                    .attr("x", 10 + margin.left)
                    .attr("y", 90 + margin.top)
                    .attr("width", 20)
                    .attr("height", 20)
                    .style("stroke","#000000");

var rect_right = g.append("rect")
                    .style('fill', 'blue')
                    .attr("x", 207 + margin.left)
                    .attr("y", 10 + margin.top)
                    .attr("width", 20)
                    .attr("height", 20)
                    .style("stroke","#000000");
                           
g.append('text').style('fill', 'blac')
                        .attr('x', 75 + margin.left)
                        .attr('y', 130 + margin.top)
                        .text('Rect Size');


// Add Line with Axis
// 1. Create scale
var rectMain = d3.select("#rect_main").node().getBoundingClientRect();

// xscale
var width = rectMain.width;

var xscale = d3.scaleLinear()
                .domain([0, width])
                .range([0, width]);
// yscale
var height = rectMain.height;

var yscale = d3.scaleLinear()
                .domain([0, height])
                .range([0, height]);

// 2. Add scale to axis
var x_axis = d3.axisTop(xscale)
            .tickValues(xscale.ticks(10).concat(xscale.domain()));
            // .tickSize(3) // tick line length
            // .ticks(10); // tick 갯수

var y_axis = d3.axisLeft(yscale)
            .tickValues(yscale.ticks(5).concat(yscale.domain()));
                

// 3. Append group and insert axis
var xAxisTranslate =  30;

g.append("g")
        .attr("transform", "translate(40, " + xAxisTranslate  +")")
        .call(x_axis)
        .attr("class", "axis");

g.append("g")
        .attr("transform", "translate(30, " + new Number(xAxisTranslate + 10)  +")")
        .call(y_axis)
        .attr("class","axis");