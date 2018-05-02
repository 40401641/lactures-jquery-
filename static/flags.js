/*$(function () {
	// body...
	$('body').append("Hello World");

});*/

$(function() {
	// body...
	var fr= $("<div/>");
	fr.append($('<div/>',{text:'France'}));
	fr.append($('<img/>',{src:'C:/Users/X541UJ/JQuery/static/flags/fr.gif'}));
	$('body').append(fr);
	
	var br=$("<div/>")
	br.append($('<div/>',{text:'Brazil'}));
	br.append($('<img/>',{src:'C:/Users/X541UJ/JQuery/static/flags/br.gif'}));
	$('body').append(br);
	
	var gr=$("<div/>")
	gr.append($('<div/>',{text:'Greece'}));
	gr.append($('<img/>',{src:'C:/Users/X541UJ/JQuery/static/flags/gr.gif'}));
	$('body').append(gr);
	
	$('img').css('border','solid 3px gray');
	$('img').css('width',200);
	$('div div').css('text-align','center');
	$('body').css('font-sixe','x-large');
	$('body>div').css({width:206,
	border:'2px solid black',
	padding:'24px',display:'inline-block',
	margin:'1ex'});
});

