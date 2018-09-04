import * as d3 from 'd3';

// 2. 상 / 하 Background pattern
d3.select("#graphic").append("div")
        .text("2.상/하 Background pattern");

d3.select("#graphic").append("div")
        .attr("id", "bg-pattern");

d3.json('data/bgPattern.json').then(data => {
    // 1. Make an svg2 Container
    var svg2 = d3.select("#bg-pattern").append("svg")
                                   .attr("width", 1200)
                                   .attr("height", 150);

    var rects = svg2.selectAll("rect").data(data);
    var texts = svg2.selectAll("text").data(data);

    // defs elements list
    // Type 1
    svg2.append("defs").append("pattern")
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
    // Type 2
    svg2.append("defs").append("pattern")
                .attr('id', 'pattern-bottom')
                .attr('x', 0)
                .attr('y', 0)            
                .attr('width', 4)
                .attr('height', 4)            
                .attr('patternUnits', 'userSpaceOnUse')
                .append('path')
                .attr('d', 'M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2')
                .attr('stroke', 'blue')
                .attr('stroke-width', 0.5);

    // 3. Draw the Rect
    rects.enter().append("rect")
                .attr("x", d => {
                    return d.x;
                })
                .attr("y", 10)
                .attr("width", 100)
                .attr("height", 100)
                .style("stroke", d => {
                    return d.stroke;
                })
                .style('fill', d => {
                    return d.pattern_url;
                });

    // 4. Add text caption
    texts.enter().append("text")
                .style('fill', 'black')
                .attr('x', d => {
                    if(d.name == 'Bottom'){ return d.x + 25; }
                    else { return d.x + 35; }
                })
                .attr('y', 130)
                .text(d=> {
                    return d.name;
                });                       
}).catch(function(error){
    console.log(error);
});