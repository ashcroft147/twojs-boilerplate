import * as d3 from 'd3';

// 2. 상 / 하 Background pattern
d3.select("#graphic").append("div")
        .text("1.조업구분 별 Rectangular 색상");

d3.select("#graphic").append("div")
        .attr("id", "rect-color");

d3.json('data/bgColor.json').then(data => {
    console.log(data);
    //Make an SVG Container
    var svg = d3.select("#rect-color").append("svg")
                        .attr("width", 1200)
                        .attr("height", 150);

    var rects = svg.selectAll("rect").data(data);
    var texts = svg.selectAll("text").data(data);

    // 1. 조업구분별로 Rectangle 색상 지정하기
    rects.enter().append("rect")
                .style("fill", "blue")
                .attr('x', function(d, i) {
                    return d.x;
                })
                .attr('y', 10)
                .attr('width', 100)
                .attr('height', 100)
                .style('fill', d => {
                    return d.color;
                })
                .style('stroke', d => {
                    return d.stroke;
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