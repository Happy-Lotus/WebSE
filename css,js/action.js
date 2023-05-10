
/**startPage 상단 스크롤 버튼 스크롤 액션*/

$("#scrollBTN").click(function(event){
	event.preventDefault();
	$('html,body').animate({scrollTop:$(this.hash).offset().top},1200);
});

/*startPage 하단 up 버튼 스크롤 액션*/
$("#upBTN").click(function(event){
	event.preventDefault();
	$('html,body').animate({scrollTop:$(this.hash).offset().top},1200);
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

/*navbar 액션*/
$('.nav-icon').click(function(){
	$('.navbar').addClass('active');
	$('.dimmend').addClass('active');
});
$('.exit-active').click(function(){
	$('.dimmend').removeClass('active');
	$('.navbar').removeClass('active');
});


/*startPage 배경이미지 자동 변경 액션*/
var imgArray=new Array();
imgArray[0]="url(\"../photo/work_content/fall2022.jpg\")";
imgArray[1]="url(\"../photo/work_content/spring2022.jpg\")";
imgArray[2]="url(\"../photo/work_content/spring2023.jpg\")";
imgArray[3]-"url(\"../photo/work_content/summer2022.jpg\")";
imgArray[4]-"url(\"../photo/work_content/winter2022.jpg\")";
var imgNum=0;

function showImage(){
	if(imgNum == 4){
		imgNum=0;
	}
var imgRoute=imgArray[imgNum];
imgNum++;
document.getElementById('bg').style.backgroundImage =imgRoute;
document.getElementById('bg').style.backgroundRepeat="no-repeat";
setTimeout(showImage,5000);
};