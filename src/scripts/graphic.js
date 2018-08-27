// two.js, tween.js
import Two from '../../node_modules/two.js/build/two';
import $ from 'jquery';

// 1. 조업구분별로 Rectangle 색상 지정하기
$( "<div>조업구분 별 Rectangular 색상</div>" ).appendTo( '#graphic' );
$( "<div id='rect-color'></div>" ).appendTo( '#graphic' );

var rectColorElem = $('#rect-color')[0];

const twoForColor = new Two({
    width : 1200,
    height : 200
}).appendTo(rectColorElem);

// two has convenience methods to create shapes.
var rect_hotcoil = twoForColor.makeRectangle(70, 100, 100, 100);
var rect_coldcoil = twoForColor.makeRectangle(210, 100, 100, 100);
var rect_stscoil = twoForColor.makeRectangle(350, 100, 100, 100);
var rect_escoil = twoForColor.makeRectangle(490, 100, 100, 100);
var rect_wirecoil = twoForColor.makeRectangle(630, 100, 100, 100);

// The object returned has many stylable properties:
rect_hotcoil.fill = '#FF8000';
rect_hotcoil.stroke = 'orangered'; // Accepts all valid css color
rect_hotcoil.linewidth = 5;

rect_coldcoil.fill = 'rgb(0, 200, 255)';
rect_coldcoil.opacity = 0.75;
rect_coldcoil.noStroke();

rect_stscoil.fill = 'rgb(0, 200, 255)';
rect_stscoil.opacity = 0.75;
rect_stscoil.noStroke();

rect_escoil.fill = 'rgb(0, 200, 255)';
rect_escoil.opacity = 0.75;
rect_escoil.noStroke();

rect_wirecoil.fill = 'rgb(0, 200, 255)';
rect_wirecoil.opacity = 0.75;
rect_wirecoil.noStroke();

twoForColor.update();

// 1. 조업구분별로 Rectangle 색상 지정하기
$( "<div>상 / 하 Background pattern</div>" ).appendTo( '#graphic' );
$( "<div id='bg-pattern'></div>" ).appendTo( '#graphic' );

var bgPatternElem = $('#bg-pattern')[0];

var pattern = new Two({
    type: Two.Types.canvas,
    width: 10,
    height: 10
});

pattern.makeLine(pattern.width, 0, 0, pattern.height);
pattern.update();

const twoForPattern = new Two({
}).appendTo(bgPatternElem);

var rect_top = twoForPattern.makeRectangle(70, 100, 100, 100);
var texture_top = new Two.Texture(pattern.renderer.domElement);
texture_top.scale = 1;

// The object returned has many stylable properties:
//rect_top.fill = '#FF8000';
//rect_top.stroke = 'orangered'; // Accepts all valid css color
//rect_top.linewidth = 5;
rect_top.fill = texture_top;
/*
var rect_bottom = twoForPattern.makeRectangle(210, 100, 100, 100);

// The object returned has many stylable properties:
rect_bottom.fill = '#FF8000';
rect_bottom.stroke = 'orangered'; // Accepts all valid css color
rect_bottom.linewidth = 5;
*/
twoForPattern.update();

$( "<div id='rect-edge'>Edge Rect</div>" ).appendTo( '#graphic' );
$( "<div id='rect-size'>Rect Size</div>" ).appendTo( '#graphic' );

/*
var rect = two.makeRectangle(two.width / 4, two.height / 3.9, 30 ,30);
two.bind('update', function() {
  rect.rotation += 0.001;
});

var circle = two.makeCircle(100, 100, 50);
circle.fill = '#FF8000';
circle.stroke = 'oranged';

var status = true;

 two.bind('update', function(frameCount) {
     console.log(frameCount);

     if(status)
     {
         circle.opacity = 0.4;
         status = false;
     }
     else {
         circle.opacity = 1;
         status = true;
     }
}).play();

var roundedRect = two.makeRoundedRectangle(two.width / 3, two.height / 3, 200, 50);
roundedRect.fill = 'blue';


var line = two.makeLine(200,200,240,500);
line.linewidth = 5;
*/