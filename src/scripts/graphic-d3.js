import * as d3 from 'd3';
import $ from 'jquery';


// 1. 조업구분별로 Rectangle 색상 지정하기
$( "<div>조업구분 별 Rectangular 색상</div>" ).appendTo( '#graphic' );
$( "<div id='rect-color'></div>" ).appendTo( '#graphic' );
//Make an SVG Container
var svgContainer = d3.select("#rect-color").append("svg")
                                    .attr("width", 1200)
                                   .attr("height", 150);

//Draw the Rectangle
var rect_hotcoil = svgContainer.append("rect")
                            .attr("x", 10)
                            .attr("y", 10)
                            .attr("width", 100)
                            .attr("height", 100);

//Draw the Rectangle
var rect_coldcoil = svgContainer.append("rect")
                            .attr("x", 120)
                            .attr("y", 10)
                            .attr("width", 100)
                            .attr("height", 100);

// 2. 상 / 하 Background pattern
$( "<div>상 / 하 Background pattern</div>" ).appendTo( '#graphic' );
$( "<div id='bg-pattern'></div>" ).appendTo( '#graphic' );

// 3. Edge Rect 
$( "<div id='rect-edge'>Edge Rect</div>" ).appendTo( '#graphic' );

// 4. Rect Size Represents
$( "<div id='rect-size-represents'>Rect Size</div>" ).appendTo( '#graphic' );
