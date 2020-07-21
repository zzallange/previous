$(document).ready(function(){
    
    //tab-category
    $('.tab-cont').hide();
    $('.tabFirst').show();
    
    $('.btn-tab').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        
        var idx = $('.btn-tab').index(this);
        $('.tab-cont').hide();
        $('.tab-cont').eq(idx).show();
        
    });
    
    //footer-family-site
    $('.btn-site').click(function(){
        $('.site-list').toggleClass('active');    
    });
    
    
});//end