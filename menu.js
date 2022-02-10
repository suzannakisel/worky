$(document).ready(function() {
	$('.burger').click(function(){
        $('.burger').toggleClass('open-menu');
        $('.navigator').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
	});
});