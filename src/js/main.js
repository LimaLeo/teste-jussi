var ordenaParada = function(){
	
}

var moveElevador = function(botao, alturaAndar){
	alturaElevador = $("#elevador").offset().top;
	deslocamento = alturaElevador - alturaAndar -5;
	botao.toggleClass("active");

	console.log(deslocamento);
	$("#elevador").animate({
		"top": "-=" + deslocamento + "px" }, 1000, function(){
			botao.toggleClass("active");
			$("#elevador").find(".porta").toggleClass("aberta");
			setTimeout(function(){
    			$("#elevador").find(".porta").toggleClass("aberta");
    		},1500);
		}
	);
}

$(function(){
	$(".sobe").on("click", function(event){
		event.preventDefault();
		alturaAndar = $(this).closest("section").find("article").offset().top;
		moveElevador($(this), alturaAndar);
	});

	$(".desce").on("click", function(event){
		event.preventDefault();
		alturaAndar = $(this).closest("section").find("article").offset().top;
		moveElevador($(this), alturaAndar);
	});
});