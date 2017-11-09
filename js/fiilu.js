//Scripts By N. V.


$(document).ready(function() {
	getFood();
});
$( window ).load(function() {
  	orderList();
	$( "button" ).click(function() {$(".day").hide(); $(this).parent(".buttons").parent(".days").children(".food").children(".day."+$(this).html()).toggle();});
});
$( "button" ).click(function() {$(".day").hide();	$(this).parent(".buttons").parent(".days").children(".food").children(".day."+$(this).html()).toggle();});

function getFood() {
	jQuery(function($) {
		  $(".food-fiilu").rss("https://www.fazer.fi/api/location/menurss/current?pageId=29801&language=fi",
		  {
			entryTemplate:'<div class="days"><h1>{title}</h1><br/><div class="food">{body}</div></div>'
		  })
	});

}
function orderList() {
	var buttons = false;
	$("br").remove();
	$(".food-fiilu").prepend($(".days table"));
	$(".food-fiilu table").addClass("table-bordered");
	$(".food-fiilu table:nth-child(2)").remove();
	$(".days table").remove();

	$('.food-fiilu div h2').each(function(){
		if($(this).parent(".food").parent(".days").children(".buttons").length < 1 ) {
				$(this).parent(".food").parent(".days").children("h1").after("<div class='buttons'></div>")
		}$(this).parent(".food").parent(".days").children(".buttons").append('<button type="button" class="btn btn-primary">'+$.trim($(this).html())+'</button>');

	
    var $set = $(this).nextUntil("h2").andSelf();
$set.wrapAll('<div class="day ' + $(this).html().replace(/&nbsp;/gi,'') +'" />'); 
});

	$("button").each(function() { $(this).html($(this).html().replace(/&nbsp;/gi,''));});
	
}

