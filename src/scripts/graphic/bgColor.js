import * as d3 from 'd3';
import $ from 'jquery';
// import { text } from 'd3-fetch';

$( "<div>조업구분 별 Rectangular 색상</div>" ).appendTo( '#graphic' );
$( "<div id='rect-color'></div>" ).appendTo( '#graphic' );

d3.json('data/bgColor.json').then(function(data){
    console.log(data);
    //Make an SVG Container
    var svgContainer = d3.select("#rect-color").append("svg")
                                        .attr("width", 1200)
                                    .attr("height", 150);

    var rects = svgContainer.selectAll("rect").data(data);
    var texts = svgContainer.selectAll("text").data(data);

    /**
     *  enter()
     *  - 바인드 된 데이터들 중 아직 document element를 갖지 못한 데이터에 대해서
     * 객체를 생성해서 반환한다.
     */

    // 1. 조업구분별로 Rectangle 색상 지정하기
    rects.enter().append("rect")
                .style("fill", "blue")
                .attr('x', function(d, i) {
                    console.log("x: " + d.x + ", "+i);
                    return d.x;
                })
                .attr('y', 10)
                .attr('width', 100)
                .attr('height', 100)
                .style('fill', d => {
                    return d.color;
                });

    // 2. Rectangle에 Name Captioning
    texts.enter().append("text")
                .style('fill', 'black')
                .attr('x', d => {
                    return d.x + 35;
                })
                .attr('y', 130)
                .text(d => {
                    return d.name;
                });

}).catch(function(error){
    console.log(error);
});