
$(document).ready(function(){
    
    $(".nav li").click(function(){
        $(this).toggleClass("on");
    });
    
    $('.what_talk').click(function(){
        $('.what_pop').toggleClass("on");
    });
    
    /* 투표하기 */
    /*$(".click_vote").click(function(){
        $(".v_check").slideToggle(700);
        $(this).css({display:'none'});
    });*/
    /* 결과보기 */
    /*$(".click_result").click(function(){
        $(".v_result").slideToggle(700);
        $(this).css({display:'none'});
    });*/
    
    
    /* hamber_menu */
    $(".btn_allmenu").click(function(){
        $(".visual_menu").addClass("visual_menu_open");
        $('.menu_dim').fadeIn();
        $('.visual_menu_open').show();
        $('body').toggleClass('body_on');
    });
    $(".menubtn_x").click(function(){
        $(".visual_menu").removeClass("visual_menu_open",3000);
        $('.menu_dim').fadeOut();
        $('body').toggleClass('body_on');
    });    
    /* Search */
    $(".btn_search").click(function(){
        $('.visual_search_open').show(),5000;
        $(".visual_search").addClass("visual_search_open");
        $('.sch_dim').fadeIn();
        $('body').toggleClass('body_on');
    });
    $(".schbtn_x").click(function(){
        $(".visual_search").removeClass("visual_search_open",5000);
        $('.sch_dim').fadeOut();
        $('body').toggleClass('body_on');
    });  
    /* //Search */
    


    $('.menu li').click(function(){
       $(this).find('a').addClass('on'); 
       $(this).siblings().find('a').removeClass('on'); 
    });
    
    /* dim */
    $('.menu_dim').click(function(){
        $(this).fadeOut();
        $('.visual_search_open').hide();
        $('.visual_menu_open').hide();
        $('body').toggleClass('body_on');
    });
    $('.sch_dim').click(function(){
        $(this).fadeOut();
        $('.visual_search_open').hide();
        $('.visual_menu_open').hide();
        $('body').toggleClass('body_on');
    });

    /* 톡까총선 popup 열기 */
    $('.what_talk a').click(function(e){
        e.preventDefault();
        $('.what_popup').addClass('active');
    });
    
    /* 톡까총선 popup 닫기 */
    $('.what_popup .btn_close').click(function(){
        $('.what_popup').removeClass('active');
        $('html, body').css({'overflow':''});
    });

    $('.what_popup').click(function () {  
        $(this).removeClass('active');
        $('html, body').css({'overflow':''});
    });
    
    /* 연관키워드 보기 */
    $(window).scroll(function() {
        if($(window).scrollTop() > $('kword').height()){
            $('.btn_relative').addClass('on');
        } else {
            $('.btn_relative').removeClass('on');
        }
    });
 
});//end

    //Top Button
    $(window).scroll(function() {
        if($(window).scrollTop() > $('header').height()){
            $('.btn_top').addClass('on');
        } else {
            $('.btn_top').removeClass('on');
        }
    });
    $(function(){
        $('.btn_top').click(function(){
            $('html, body').animate({scrollTop: 0}, 300);
        });
    });


	    //Top Button
    $(window).scroll(function() {
        if($(window).scrollTop() > $('.brand_con01').height()){
            $('.brand_scroll').addClass('on');
        } else {
            $('.brand_scroll').removeClass('on');
        }
    });
    $(function(){
        $('.brand_scroll').click(function(){
            $('html, body').animate({scrollTop: 800}, 300);
        });
    });


    













