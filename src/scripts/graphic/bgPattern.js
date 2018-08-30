import * as d3 from 'd3';
import $ from 'jquery';

// 2. 상 / 하 Background pattern
$( "<div>2.상/하 Background pattern</div>" ).appendTo( '#graphic' );
$( "<div id='bg-pattern'></div>" ).appendTo( '#graphic' );
// 1. Make an SVG Container
var svgContainer = d3.select("#bg-pattern").append("svg")
                                    .attr("width", 1200)
                                   .attr("height", 150);

// 2. Make defs
svgContainer.append("defs").append("pattern")
            .attr("id", "pattern-top")
            .attr('x', 0)
            .attr('y', 0)
            .attr('width', 20)
            .attr('height', 20)
            .attr('patternUnits', "userSpaceOnUse")
            .append("circle")
            .attr('cx',10)
            .attr('cy', 10)
            .attr('r', 10)
            .style('stroke', "none")
            .style('fill', 'pink');

// 3. Draw the Rect
var rect_top = svgContainer.append("rect")
                            .attr("x", 10)
                            .attr("y", 10)
                            .attr("width", 100)
                            .attr("height", 100)
                            .style("stroke", "#000000")
                            .style('fill', 'url(#pattern-top)');

// 4. Add text caption
svgContainer.append("text")
            .style('fill', 'black')
            .attr('x', 45)
            .attr('y', 130)
            .text('Top');            

svgContainer.append("defs").append("pattern")
            .attr('id', 'pattern-bottom')
            .attr('patternUnits', 'userSpaceOnUse')
            .attr('width', 4)
            .attr('height', 4)
            .append('path')
            .attr('d', 'M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2')
            .attr('stroke', 'blue')
            .attr('stroke-width', 0.5);

// 3. Draw the Rect
var rect_pattern_1 = svgContainer.append("rect")
                            .attr("x", 120)
                            .attr("y", 10)
                            .attr("width", 100)
                            .attr("height", 100)
                            .style("stroke", "#000000")
                            .style('fill', 'url(#pattern-bottom)');            

// 4. Add text caption
svgContainer.append("text")
            .style('fill', 'black')
            .attr('x', 145)
            .attr('y', 130)
            .text('Bottom');                              