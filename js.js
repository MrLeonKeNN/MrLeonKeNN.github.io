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

$("a.scrollto").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });
  $('a.scrollto').click(function(event) {
	$(' .header__burger, .header__menu, .got').removeClass('active');
	$('body').removeClass('lock');
})
