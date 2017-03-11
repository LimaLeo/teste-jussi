var listAndares = [];

var ordenaParadaCrescente = function(){
	listAndares.sort(function(a,b) {
        return a[0]-b[0];
    });
}

var ordenaParadaDecrescente = function(){
	listAndares.sort(function(a,b) {
        return a[0]-b[0];
    });
    listAndares.reverse();
}

var incluiParada = function(botao){
	andar = botao.closest('section'); 
	numeroAndar = andar.closest("section").find(".title").text().replace(/[^0-9]/g,'');
	calculaDeslocamento(botao);
	listAndares.push([deslocamento,botao]);
	
	alturaAndar = botao.closest("section").find("article").offset().top;
	alturaElevador = $("#elevador").offset().top;
	if(alturaAndar>alturaElevador)
	{
		ordenaParadaDecrescente();
	}else{
		ordenaParadaCrescente();
	}

	decideDestino();
}

var decideDestino = function(){
	botao = listAndares[0][1];
	moveElevador(botao);
}

var calculaDeslocamento = function(botao){
	alturaElevador = $("#elevador").offset().top;
	alturaAndar = botao.closest("section").find("article").offset().top;
	deslocamento = alturaElevador - alturaAndar -5;
	return deslocamento;
}

var statusAndar = function(botao){
	botao.closest('section').toggleClass("active");
	$("#elevador").find(".porta").toggleClass("aberta");
}

var fimDePercurso = function(){
	$("#elevador").stop().animate({
		"top": "-=" + calculaDeslocamento($(".terreo .sobe")) + "px" }, 5000, function(){
			$("#elevador").find(".porta").toggleClass("aberta");
			$(".terreo").closest("section").toggleClass("active");
			setTimeout(function(){
				$("#elevador").find(".porta").toggleClass("aberta");
			}, 3000);
	});
}

var moveElevador = function(botao){
	calculaDeslocamento(botao);
	$("#elevador").stop().animate({
		"top": "-=" + deslocamento + "px" }, 5000, function(){
			statusAndar(botao);
			$(".terreo").closest("section").toggleClass("active");
			setTimeout(function(){
				statusAndar(botao);
				setTimeout(function(){
		    		listAndares.shift();
		    		if(listAndares.length)
		    		{
		    			decideDestino(botao);
		    		}else{
		    			fimDePercurso();
		    		}
	    		},1000);
    		},3000);
		}
	);
}

$(function(){
	$("aside a").on("click", function(event){
		var andar = $(this).closest('section'); 
		event.preventDefault();
		incluiParada($(this));
	});
});