$(document).ready(function(){
		$('.home a').hover(function(){
	         	$(this).stop().animate({'opacity' : '0'}, 500);
	 	}, function(){$(this).stop().animate({'opacity' : '1'}, 500);});
	

		$('.philosophie a').hover(function(){
		         $(this).stop().animate({'opacity' : '0'}, 500);
		 }, function(){$(this).stop().animate({'opacity' : '1'}, 500);});

		$('.business a').hover(function(){
		         $(this).stop().animate({'opacity' : '0'}, 500);
		 }, function(){$(this).stop().animate({'opacity' : '1'}, 500);});

		$('.privat a').hover(function(){
		         $(this).stop().animate({'opacity' : '0'}, 500);
		 }, function(){$(this).stop().animate({'opacity' : '1'}, 500);});

		$('.download a').hover(function(){
		         $(this).stop().animate({'opacity' : '0'}, 500);
		 }, function(){$(this).stop().animate({'opacity' : '1'}, 500);});
		
		$('.kontakt a').hover(function(){
		         $(this).stop().animate({'opacity' : '0'}, 500);
		 }, function(){$(this).stop().animate({'opacity' : '1'}, 500);});
		
});