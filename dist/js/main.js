var ordenaParada=function(){};$(function(){$(".sobe").on("click",function(a){a.preventDefault(),$("#elevador").animate({top:"-=109px"},"slow")}),$(".desce").on("click",function(a){a.preventDefault(),$("#elevador").animate({top:"+=109px"},"slow")})});