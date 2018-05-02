var clist=[
["../static/flags/br","Brazil"],
["../static/flags/fr","France"],
["../static/flags/gr","Greece"],
["../static/flags/za","South Africa"]
];
$(function () {
	// body...
	createOne();
})

function createOne(){
var i = Math.floor(clist.length*Math.random());
  var code = clist[i][0];
  var name = clist[i][1];
  var qu = $('<div id="qu"/>');
  qu.append($('<div/>',{text:name,id:'ans'}).hide());
  qu.append($('<img/>',{src:code+'.gif'}));
  qu.append($('<input/>',{id:'response'}));
  $('body').append(qu);
  $('#response').keyup(function(){
    if($('#response').val()==$('#ans').text()){
	  alert("Well Done");
      $('#qu').hide('slow',function(){
	    $('#qu').remove();
		createOne();
	  })
    }
});
  $('img').css('border','solid 3px gray');
  $('img').css('width',200);
  $('div div').css('text-align','center');
  $('body').css('font-family','arial');
  $('body').css('font-size','x-large');
  $('body>div').css({
    margin:'1ex',border:'2px black solid',
    padding:'24px',width:'206px',
    display:'inline-block'
  });
}