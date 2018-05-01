/*$(function() {
	for (var i=0; i<100; i++){
		var msg=$('<div> Hello Carat</div>');
		msg.css('font-size',i);
		$('body').append(msg);
	}
});*/

$(function() {
	// body...
	var gb= $("<div id='gid'/>");
	gb.append($('<div/>',{text:'Great Britain'}));
	gb.append($('<img/>',{src:'C:/Users/X541UJ/JQuery/static/flags/gb.gif'}));
	$('#countries').append(gb);
	/*$('#countries').attr("id","gid");*/
});

$(function(){
	$("#fr img").css({
		background:"yellow",
		border:"3px red solid"
	});
})

$(function(){
	$("#fi img").css({
		background:"yellow",
		border:"3px red solid"
	});
})

$(function(){
	$("#gid img").css({
		background:"yellow",
		border:"3px red solid"
	});
})

$(function () {
	// body...
	var elem=$('<div>/')
	elem.html('An example element');
	elem.css('border','solid blue');
	$('body').append(elem);
});

$(function () {
	// body...
	$('p:first-child').css('border','solid');
	$('p:nth-child(1)').css('border','solid');
	$('p:eq(1)').css('border','solid');
	$('p:last').css('border','solid');
});

/*$(function () {
	// body...
	var ca={
		cname="A.J CUMMING"
		caddress:{
			street:{"10 Collinton Rd",
			town:"Edinbrugh",
			post_code:"E123AD3"
		};
		transaction:
			{whn:"2014-01-11",nar:"Cash Withdrawal",amt:-100}
			{whn:"2014-10-11", nar:"BUS FARE", amt=-35}
		}
		};
		alert(ca.transaction{1};nar);
});*/