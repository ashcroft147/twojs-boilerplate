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

var rect_main = group_1.append("rect")
        .style('fill', 'white')
        .attr("id", "rect_main1")
        .attr("x", 10 + margin.left)
        .attr("y", 10 + margin.top)
        .attr("width", 320)
        .attr("height", 100)
        .style("stroke","#000000");   

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
            .attr('stroke', 'green')
            .attr('stroke-width', 0.5);

// 1. reference Material
var ref_rect_main = group_1.append("rect")
                    .style('fill', "url(#pattern-bottom-ref)")
                    .style("stroke-dasharray", ("3, 3"))  // <== This line here!!
                    .style("stroke","#000000")
                    .style("opacity", .3)                    
                    .attr("id", "ref_rect_main")
                    .attr("x", 10 + margin.left)
                    .attr("y", 10 + margin.top)
                    .attr("width", 217)
                    .attr("height", 100);

var rect_left = group_1.append("rect")
                    .style('fill', 'red')
                    //.style("stroke-dasharray", ("3, 3"))  // <== This line here!!
                    .attr("x", 10 + margin.left)
                    .attr("y", 90 + margin.top)
                    .attr("width", 20)
                    .attr("height", 20)
                    .style("stroke","#000000");

var rect_right = group_1.append("rect")
                    .style('fill', 'blue')
                    //.style("stroke-dasharray", ("3, 3"))  // <== This line here!!
                    .attr("x", 207 + margin.left)
                    .attr("y", 10 + margin.top)
                    .attr("width", 20)
                    .attr("height", 20)
                    .style("stroke","#000000");

 

// Add Axis Main Rect
var rectMain = d3.select("#rect_main1").node().getBoundingClientRect();

// xscale
var mainWidth = rectMain.width;

console.log(mainWidth);

var xscale = d3.scaleLinear()
                .domain([0, mainWidth])
                .range([0, mainWidth]);
// yscale
var mainHeight = rectMain.height;

var yscale = d3.scaleLinear()
                .domain([0, mainHeight])
                .range([0, mainHeight]);

// 2. Add scale to axis
var x_axis = d3.axisTop(xscale)
            .tickValues(xscale.ticks(10).concat(xscale.domain()));

var y_axis = d3.axisLeft(yscale)
            .tickValues(yscale.ticks(5).concat(yscale.domain()));
                
// 3. Append group and insert axis
var xAxisTranslate =  30;

group_1.append("g")
        .attr("transform", "translate(40, " +  new Number(xAxisTranslate)  +")")
        .call(x_axis)
        .attr("class", "axis");

group_1.append("g")
        .attr("transform", "translate(30, " + new Number(xAxisTranslate + 10)  +")")
        .call(y_axis)
        .attr("class","axis");

// Add Axis Ref Rect
// 1. Create scale
var refRectMain = d3.select("#ref_rect_main").node().getBoundingClientRect();

// xscale
var width = refRectMain.width;
console.log(width);
var xscale = d3.scaleLinear()
                .domain([0, width])
                .range([0, width]);
// yscale
var height = refRectMain.height;

var yscale = d3.scaleLinear()
                .domain([0, height])
                .range([0, height]);

// 2. Add scale to axis
var x_axis = d3.axisBottom(xscale)
            .tickValues(xscale.ticks(10).concat(xscale.domain()));

var y_axis = d3.axisRight(yscale)
            .tickValues(yscale.ticks(5).concat(yscale.domain()));
                
// 3. Append group and insert axis
var xAxisTranslate =  30;

group_1.append("g")
        .attr("transform", "translate(40, " +  new Number(xAxisTranslate + 120)  +")")
        .call(x_axis)
        .attr("class", "axis");

group_1.append("g")
        .attr("transform", "translate(265, " + new Number(xAxisTranslate + 10)  +")")
        .call(y_axis)
        .attr("class","axis");