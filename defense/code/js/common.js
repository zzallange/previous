
$(document).ready(function(){
    
    /* hamber_menu */
    $(".btn_all").click(function(){
        $(".visual_menu").addClass("visual_menu_open");
        $('.menu_dim').fadeIn();
        $('.visual_menu_open').show();
        $('body').toggleClass('body_on');
    });
    $(".btn_x").click(function(){
        $(".visual_menu").removeClass("visual_menu_open",3000);
        $('.menu_dim').fadeOut();
        $('body').toggleClass('body_on');
    });    
    /* Search */
    $(".btn_sch").click(function(){
        $('.visual_sch_open').show(),5000;
        $(".visual_sch").addClass("visual_sch_open");
        $('.sch_dim').fadeIn();
        $('body').toggleClass('body_on');
        $('.sub_gnb .nav_bx .menu').css({display:'none'});
        $('.nav_dim').removeClass('on');
    });
    $(".schbtn_x").click(function(){
        $(".visual_sch").removeClass("visual_sch_open",5000);
        $('.sch_dim').fadeOut();
        $('body').toggleClass('body_on');
    });  
    /* //Search */
    
    /* GNB */
    var windowWidth = $(window).width(),
      header = $("#header"),
      gnb = $("#gnb"),
      menu = $(".depth1 li")
      depth2 = $(".depth2")

      $(menu).each(function(){
        $(this).on("mouseover", function () {
          if ($(this).find(depth2).length) {
            $(header).addClass('gnb_open')
            $(depth2).hide();
            $(this).find(depth2).show();
          }else {
            $(header).removeClass('gnb_open')
            $(depth2).hide();
            $(this).find(depth2).show();
          }
        });
      });
      $("#gnb .depth2 li a").on("mouseover", function () {
        $("#gnb .depth1 > li > h2 > a").removeClass('on')
        $(this).parent().parent().siblings("h2").children("a").addClass('on')
      });
      function depth2_close(){
        $("#header .nav").mouseleave(function () {
          $(header).removeClass('gnb_open')
          $(depth2).hide();
        });
      }
      depth2_close();
    

    $('.tab_btn').click(function(){
        $(this).toggleClass('active');
        $(this).siblings().removeClass('active');
        $(this).find('span').toggleClass('on');
        $(this).siblings().find('span').removeClass('on');
    });
    $('.tab01').click(function(){
       $('.tab_ct01').toggle(); 
       $('.tab_ct02').hide(); 
       $('.tab_ct03').hide(); 
       $('.tab_ct04').hide(); 
       $('.tab_ct05').hide(); 
       $('.tab_ct06').hide(); 
    });
    $('.tab02').click(function(){
       $('.tab_ct02').toggle(); 
       $('.tab_ct01').hide(); 
       $('.tab_ct03').hide(); 
       $('.tab_ct04').hide(); 
       $('.tab_ct05').hide(); 
       $('.tab_ct06').hide(); 
    });
    $('.tab03').click(function(){
       $('.tab_ct03').toggle(); 
       $('.tab_ct01').hide(); 
       $('.tab_ct02').hide(); 
       $('.tab_ct04').hide(); 
       $('.tab_ct05').hide(); 
       $('.tab_ct06').hide(); 
    });
    $('.tab04').click(function(){
       $('.tab_ct04').toggle(); 
       $('.tab_ct01').hide(); 
       $('.tab_ct02').hide(); 
       $('.tab_ct03').hide(); 
       $('.tab_ct05').hide(); 
       $('.tab_ct06').hide(); 
    });
    $('.tab05').click(function(){
       $('.tab_ct05').toggle(); 
       $('.tab_ct01').hide(); 
       $('.tab_ct02').hide(); 
       $('.tab_ct03').hide(); 
       $('.tab_ct04').hide(); 
       $('.tab_ct06').hide(); 
    });
    $('.tab06').click(function(){
       $('.tab_ct06').toggle(); 
       $('.tab_ct01').hide(); 
       $('.tab_ct02').hide(); 
       $('.tab_ct03').hide(); 
       $('.tab_ct04').hide(); 
       $('.tab_ct05').hide(); 
    });
    
    
    
    /* dim */
    $('.menu_dim').click(function(){
        $(this).fadeOut();
        $('.visual_sch_open').hide();
        $('.visual_menu_open').hide();
        $('body').toggleClass('body_on');
    });
    $('.sch_dim').click(function(){
        $(this).fadeOut();
        $('.visual_sch_open').hide();
        $('.visual_menu_open').hide();
        $('body').toggleClass('body_on');
    });
    
   
    
    
    /* layer모달 popup close sns */
    $('.wrapsns_layer .btn_close').click(function(){
        $('.wrapsns_layer').removeClass('active');
        $('html, body').css({'overflow':''});
    });

    $('.wrapsns_layer').click(function () {  
        $(this).removeClass('active');
        $('html, body').css({'overflow':''});
    });

    /* layer모달 popup 열기 sns */
    $('.sns_sh').click(function(e){
        e.preventDefault();
        $('.wrapsns_layer').addClass('active');
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
// Button
$(document).ready(function(){
	var basket_btn = $(".basket_btn");
  $(basket_btn).each(function(){
    $(this).click(function(){
     $(this).parent().toggleClass('on');
    });
  });
});


    













