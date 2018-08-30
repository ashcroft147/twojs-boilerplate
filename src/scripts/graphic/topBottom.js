import * as d3 from 'd3';
import $ from 'jquery';

// 2. 상 / 하 Background pattern
$( "<div>상 / 하 Background pattern</div>" ).appendTo( '#graphic' );
$( "<div id='bg-pattern'></div>" ).appendTo( '#graphic' );
// 1. Make an SVG Container
var svgContainer1 = d3.select("#bg-pattern").append("svg")
                                    .attr("width", 1200)
                                   .attr("height", 150);

// 2. Make defs
svgContainer1.append("defs").append("pattern")
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
            .style('fill', 'yellow');

// 3. Draw the Rect
var rect_coldcoil = svgContainer1.append("rect")
                            .attr("x", 10)
                            .attr("y", 10)
                            .attr("width", 100)
                            .attr("height", 100)
                            .style("stroke", "#000000")
                            .style('fill', 'url(#pattern-top)');

svgContainer1.append("defs").append("pattern")
            .attr("id", "pattern-bottom")
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
var rect_coldcoil = svgContainer1.append("rect")
                            .attr("x", 120)
                            .attr("y", 10)
                            .attr("width", 100)
                            .attr("height", 100)
                            .style("stroke", "#000000")
                            .style('fill', 'url(#pattern-bottom)');
