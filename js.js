 //document.getElementById('ilove').onclick = zeroTwo();

 //function zeroTwo(){
	// var a = document.getElementById('h1');
	// a.style.color = 'black';
 //}


 $(document).ready(function() {
	 $('.iLove').click(function(event){
		 $('.got').toggleClass('active');
		 $('body').toggleClass('lock');
		 
	 });
 });
 $('.header__list').click(function(event) {
	$('.header__burger,.header__menu').removeClass('active');
	$('body').removeClass('lock');
})