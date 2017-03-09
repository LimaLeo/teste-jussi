var ordenaParada = function(){
	
}

$(function(){
	$(".sobe").on("click", function(event){
		event.preventDefault();
		$("#elevador").animate({
			"top": "-=109px" }, "slow" 
		);
	});

	$(".desce").on("click", function(event){
		event.preventDefault();
		$("#elevador").animate({
			"top": "+=109px" }, "slow" 
		);
	});
});