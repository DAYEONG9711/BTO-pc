//메인 메뉴 - 롤오버시 서브메뉴 슬라이드다운
$('.dp1').mouseenter(function(){
    $('.sub').stop().slideDown();
});
$('header').mouseleave(function(){
    $('.sub').stop().slideUp();
});

//메인페이지 - 메인슬라이더
$('.main_visual_imgs').slick({
    autoplay: true,
    autoplaySpeed:1500,
    speed:500,
    arrows:false,
    dots:true
});

//메인페이지 - tab
$('.content div:gt(0)').hide();

$('.tab li').click(function(){
    var nn = $(this).index(); //몇번째 li를 클릭한 건지 알아내서 변수에 넣어줌, 0부터 시작
    console.log(nn+'번째 li를 클릭했습니다.')

    $('.tab li').removeClass('select');
    $(this).addClass('select');

    $('.content div').hide();
    $('.content div').eq(nn).show();
});

//메인페이지 - ad slick
$('.ad_inner_imgs').slick({
    autoplay: true,
    autoplaySpeed:1500,
    speed:1000,
    vertical:true,
});

