import * as d3 from 'd3';
import $ from 'jquery';
import { text } from 'd3-fetch';


// 1. 조업구분별로 Rectangle 색상 지정하기
$( "<div>조업구분 별 Rectangular 색상</div>" ).appendTo( '#graphic' );
$( "<div id='rect-color'></div>" ).appendTo( '#graphic' );
//Make an SVG Container
var svgContainer = d3.select("#rect-color").append("svg")
                                    .attr("width", 1200)
                                   .attr("height", 150);


// Draw the Hot Coil Rectangle
var rect_hotcoil = svgContainer.append("rect")
                            .style('fill', 'blue')
                            .attr("x", 10)
                            .attr("y", 10)
                            .attr("width", 100)
                            .attr("height", 100);

/*                            
svgContainer.append('text').style('fill', 'blue')
                        .attr('x', 200)
                        .attr('y', 100)
                        .text('Hello world');
*/
//Draw the Cold Coil Rectangle
var rect_coldcoil = svgContainer.append("rect")
                            .attr("x", 120)
                            .attr("y", 10)
                            .attr("width", 100)
                            .attr("height", 100)
                            .attr("rx", 10)
                            .attr("ry", 10)
                            .style('fill', 'red');

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

// 3. Edge Rect 
$( "<div id='rect-edge'>Edge Rect</div>" ).appendTo( '#graphic' );

// 4. Rect Size Represents
$( "<div id='rect-size-represents'>Rect Size</div>" ).appendTo( '#graphic' );
