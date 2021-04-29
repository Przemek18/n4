$('body').append($("<div></div>",{class:"tekst"}));
$('.tekst').append($("<div></div>",{class:"tekst1"}));
$('.tekst1').html("TEKST");

$('body').append($("<div></div>",{class:"przycisk"}));
$('.przycisk').append($("<input/>",{class:"wgore",type:"submit",value:"w górę",id:"up"}));

$('body').append($("<div></div>",{class:"przyciski"}));
$('.przyciski').append($("<input/>",{class:"wgore",type:"submit",value:"w lewo",id:"left"}));
$('.przyciski').append($("<input/>",{class:"wgore",type:"submit",value:"w dół",id:"down"}));
$('.przyciski').append($("<input/>",{class:"wgore",type:"submit",value:"w prawo",id:"right"}));

$('body').append($("<div></div>",{class:"komunikat"}));
$('.komunikat').html("Tekst ruchomy na miejscu");

$('#up').click(function(){up();});
$('#left').click(function(){left();});
$('#down').click(function(){down();});
$('#right').click(function(){right();});

var upp=0;
var leftt=0;

function up()
{
	upp=upp+5;
	$('.tekst1').css({"margin-bottom":upp+"px","background-color":"black",color:"red"});
	$('.komunikat').html("Tekst porusza się w górę");
}

function down()
{
	upp=upp-5;
	$('.tekst1').css({"margin-bottom":upp+"px","background-color":"violet",color:"white"});
	$('.komunikat').html("Tekst porusza się w dół");
}

function left()
{
	leftt=leftt+5;
	$('.tekst1').css({"margin-right":leftt+"px","background-color":"yellow",color:"blue"});
	$('.komunikat').html("Tekst porusza się w lewo");
}

function right()
{
	leftt=leftt-5;
	$('.tekst1').css({"margin-right":leftt+"px","background-color":"blue",color:"yellow"});
	$('.komunikat').html("Tekst porusza się w prawo");
}