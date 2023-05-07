/**startPage 스크롤 */
$(".scrollbutton").click(function(event){
	event.preventDefault();
	$('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
});
/*header 액션 */
$(window).on('scroll',function(){
	if($(window).scrollTop()){
		$('header > div').addClass('active');
		$('.nav_item').addClass('nav_item_act');
		$('.wrap h1').addClass('active');
	}else{
		$('header > div').removeClass('active');
		$('.nav_item').removeClass('nav_item_act');
		$('.wrap h1').removeClass('active');
	}
});
/* up 스크롤 */
