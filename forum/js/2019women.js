
/* hope click */
/*
$(document).ready(function(){
      $(".btn_even_open").click(
            function(){
                  ShowMenuLayer();
            }
      ); 
}); 

var intMenuStatus = 0;
function ShowMenuLayer(){
      if(intMenuStatus==0){
            $(".event_pop").animate({"bottom":"0px"}, 700);
            $(".btn_even_open").addClass("on");
            intMenuStatus = 1;
      } else {
            $(".event_pop").animate({"bottom":"-550px"}, 700);
            $(".btn_even_open").removeClass("on");
            intMenuStatus = 0;
      }
}
*/
/*
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 155) {
        $(".header_ty2").addClass("on");
        $(".header_ty2").animate({"top":"0px"},100);
    } else {
        $(".header_ty2").animate({"top":"-50px"});
        $(".header_ty2").removeClass("on");
    }
});
*/

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 155) {
        $(".header_ty2").addClass("on");
    } else {
        $(".header_ty2").removeClass("on");
    }
});

$(document).ready(function(){

      var box = [];

      var len = $('.nav li').length;
      for(var i=0; i < len; i++){
            box.push( $( '#con_0'+( i + 1 ) ).offset().top-70 );
      };
      $('.nav li a').bind("click", clickNavHn );
      $(window).bind("scroll", scrollHn );
      scrollHn();

      var isAnimationProgress  = false;
      function clickNavHn(e){
            e.preventDefault();
            var clickIdx = $(this).parent().index();
            isAnimationProgress = true;
            $('html, body').stop().animate({ "scrollTop":box[clickIdx]+"px" },{ 
                        duration:1000,
                        complete:function(){
                              isAnimationProgress = false;
                        }
            });
            $('.nav li').removeClass("on").eq( clickIdx ).addClass("on");
      };

      function scrollHn(){
            var currentScrollTop = $('body').scrollTop() ? $('body').scrollTop() : $('html').scrollTop();
            if( isAnimationProgress   ) { return; }

            for( var i=0; i<len; ++i ){
                  if( currentScrollTop >= box[i] && !$('.nav li').eq(i).hasClass("on") ){
                        $('.nav li').removeClass("on").eq(i).addClass("on");
                  }
            }
      };
});


$(document).ready(function(){

      var box = [];

      var len = $('.nav2 li').length;
      for(var i=0; i < len; i++){
            box.push( $( '#con_0'+( i + 1 ) ).offset().top-70 );
      };
      $('.nav2 li a').bind("click", clickNavHn );
      $(window).bind("scroll", scrollHn );
      scrollHn();

      var isAnimationProgress  = false;
      function clickNavHn(e){
            e.preventDefault();
            var clickIdx = $(this).parent().index();
            isAnimationProgress = true;
            $('html, body').stop().animate({ "scrollTop":box[clickIdx]+"px" },{ 
                        duration:1000,
                        complete:function(){
                              isAnimationProgress = false;
                        }
            });
            $('.nav2 li').removeClass("on").eq( clickIdx ).addClass("on");
      };

      function scrollHn(){
            var currentScrollTop = $('body').scrollTop() ? $('body').scrollTop() : $('html').scrollTop();
            if( isAnimationProgress   ) { return; }

            for( var i=0; i<len; ++i ){
                  if( currentScrollTop >= box[i] && !$('.nav2 li').eq(i).hasClass("on") ){
                        $('.nav2 li').removeClass("on").eq(i).addClass("on");
                  }
            }
      };
});

