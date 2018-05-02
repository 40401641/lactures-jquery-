/*$(function () {
	// body...
	for (var i=0; i<4;i++)
		$('body')
		.append($('<button/>',{text:i}))
			.click(function(){
			alert(i);
			});
});*/



/*$(function (){
	for (var i=0;i<4;i++){
		var f=function(j){
			$('body').append($('<button/>',
			{text:i, click:function(){alert(j);}}))
		}
		f(i);
	};
	
})*/

$(function () {
	// body...
	alert("Hello");
	for (var i=0; i<4;i++){
		$('body').append($('<button/>',
			{text:i, data:{x:i}, 
			click:function(){alert($(this).data('x'))};
		}));
	}
});