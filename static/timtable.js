$(function () {
	// body...
	$('#key th').css('color','black');
	/*$('#key').css('border','solid black');*/
	/*$('#key tr').css('border','solid black')*/
	$('#key td').css('border','solid black');
	
});

$(function () {
	// body...
	$('body').prepend($('<div/>',{text:'Hide key', css:{color:'Blue',cursor:'pointer'},
	click:function () {
		if($("#key:visible").length==1){
		$('#key').fadeOut('slow');
		$(this).text('Show Key');
	}
	else{
		$('#key').fadeIn('slow');
		$(this).text('Hide Key');	
	}
		// body...
		/*$('#key').toggle();*/
	}}));

	
});

$(function () {
	// body...
	$('#timetable').css('border','solid black');
	$('#timetable td').css('width', '70px');
	$('tr.t1:first-child').css({
		background:"gray",
		height : "10px",
	});
	$('#timetable td').css('border','solid black');
});

$(function(){
$('table td:not(:empty)').mouseover(function () {
	// body...
	$(this).css('background','red');
});
$('table td').mouseout(function () {
	// body...
	$(this).css('background','inherit');
});

});