/**startPage 스크롤 */
$("#scrollBTN").click(function(event){
	event.preventDefault();
	$('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
});
/*header 액션 */
$(window).on('scroll',function(){
	if($(window).scrollTop()){
		$('header > div').addClass('active');
		$('.nav-item').addClass('nav-item_act');
		$('.wrap h1').addClass('active');
	}else{
		$('header > div').removeClass('active');
		$('.nav-item').removeClass('nav-item_act');
		$('.wrap h1').removeClass('active');
	}
});
/* up 스크롤 */



/*navbar 액션*/
$('.nav-icon').click(function(){
	$('.navbar').addClass('active');
	$('.dimmend').addClass('active');
});
$('.exit-active').click(function(){
	$('.navbar').removeClass('active');
	$('.dimmend').removeClass('active');
});
