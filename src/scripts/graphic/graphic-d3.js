import * as d3 from 'd3';
import $ from 'jquery';
// import { text } from 'd3-fetch';


// 1. 조업구분별로 Rectangle 색상 지정하기
$( "<div>조업구분 별 Rectangular 색상</div>" ).appendTo( '#graphic' );
$( "<div id='rect-color'></div>" ).appendTo( '#graphic' );
//Make an SVG Container
var svgContainer = d3.select("#rect-color").append("svg")
                                    .attr("width", 1200)
                                   .attr("height", 150);


// 열연
var rect_hotcoil = svgContainer.append("rect")
                            .style('fill', 'blue')
                            .attr("x", 10)
                            .attr("y", 10)
                            .attr("width", 100)
                            .attr("height", 100);
                           
svgContainer.append('text').style('fill', 'black')
                        .attr('x', 45)
                        .attr('y', 130)
                        .text('열연');

// 냉연
var rect_coldcoil = svgContainer.append("rect")
                            .attr("x", 120)
                            .attr("y", 10)
                            .attr("width", 100)
                            .attr("height", 100)
//                            .attr("rx", 10)
//                            .attr("ry", 10)
                            .style('fill', 'red');

svgContainer.append('text').style('fill', 'black')                        
                            .attr('x', 150)
                            .attr('y', 130)
                            .text('냉연');                            

// 후판
var rect_coldcoil = svgContainer.append("rect")
                            .attr("x", 230)
                            .attr("y", 10)
                            .attr("width", 100)
                            .attr("height", 100)
                            .style('fill', 'red');

svgContainer.append('text').style('fill', 'black')                        
                            .attr('x', 260)
                             .attr('y', 130)
                            .text('후판');   

// STS
var rect_coldcoil = svgContainer.append("rect")
                            .attr("x", 340)
                            .attr("y", 10)
                            .attr("width", 100)
                            .attr("height", 100)
                            .style('fill', 'red');

svgContainer.append('text').style('fill', 'black')                        
                            .attr('x', 370)
                            .attr('y', 130)
                            .text('STS');   

// 전강
var rect_coldcoil = svgContainer.append("rect")
                            .attr("x", 450)
                            .attr("y", 10)
                            .attr("width", 100)
                            .attr("height", 100)
                            .style('fill', 'red');

svgContainer.append('text').style('fill', 'black')                        
                            .attr('x', 480)
                            .attr('y', 130)
                            .text('전강');   

