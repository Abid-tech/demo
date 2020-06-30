$(function(){
    

    
//BACK-TOP PART START    
$('.back-btn').on('click',function(){
    $('html,body').animate({scrollTop:0},1500);
}) 
//BACK-TOP PART END
    
    
//BACK-TOP PART END
$(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    
    //BACK-TOP FADE START
    if(scrolling > 200){
       $('.back-btn').fadeIn();
    }
    else{
        $('.back-btn').fadeOut();
    }
    //BACK-TOP FADE END
    
    
    //BG-ADD FADE START
    if(scrolling > 100){
        $('.navbar').addClass('bg');
    }
    else{
        $('.navbar').removeClass('bg');
    }
    //BG-ADD FADE END
    
});
    
    
//ANIMATION SCROLL START
var html_body = $('html, body');
$('.navbar a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top - 70
            }, 1500);
            return false;
        }
    }
});        
    
    
    
    
    
});