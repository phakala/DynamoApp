//Scripts By N. V.


$(document).ready(function() {
	getFood();
		$("h2").click(function(){
			var noSpaces = $(this).html().replace(/&nbsp;/gi,'');
			 $(".day."+$.trim(noSpaces)).toggle();
		});
});

$( window ).load(function() {
  	orderList();
	
});
function getFood() {
	jQuery(function($) {
		  $(".food-fiilu").rss("https://www.fazer.fi/api/location/menurss/current?pageId=29801&language=fi",
		  {
			entryTemplate:'<div class="days"><h1>{title}</h1><br/><div class="food">{body}</div></div>'
		  })
	});

}
function orderList() {
	$("br").remove();
	$(".food-fiilu").prepend($(".days table"));
	$(".food-fiilu table").addClass("table-bordered");
	$(".food-fiilu table:nth-child(2)").remove();
	$(".days table").remove();
	
	$('.food-fiilu div h2').addClass("btn");
	$('.food-fiilu div h2').addClass("btn-primary");
	 
	$('.food-fiilu div h2').each(function(){ 
    var $set = $(this).nextUntil("h2");
    $set.wrapAll('<div class="day ' + $(this).html() +'" />');
});
	
	
	
}
