


function pcLayout(){
    

    $('#wrap').children().on('mousewheel',function(e,d){

        if(d>0){
            let prv = $(this).prev().offset().top;
            $('html,body').stop().animate({'scrollTop':prv});
        }else if(d<0){
            let nxt=  $(this).next().offset().top;
            $('html,body').stop().animate({'scrollTop':nxt});
        }

   });

function pcScroll(){
 
    
        let winHeight = $(window).height();
        let scr = $(window).scrollTop();
     
     
     
        if(winHeight*3 <= scr){
         $('.dot').stop().fadeIn();
        }else{
         $('.dot').stop().fadeOut();
        }
     
     
     
        if(scr>=winHeight*3 && scr<winHeight*4){
             $('.dot ul li').eq(0).addClass('active')
             .siblings().removeClass('active');
        }else if(scr>=winHeight*4 && scr<winHeight*5){
         $('.dot ul li').eq(1).addClass('active')
         .siblings().removeClass('active');
     
        }else if(scr>=winHeight*5 && scr<winHeight*6){
         $('.dot ul li').eq(2).addClass('active')
         .siblings().removeClass('active');
     
        }else if(scr>=winHeight*6 && scr<winHeight*7){
         $('.dot ul li').eq(3).addClass('active')
         .siblings().removeClass('active');
        }
        
}


   $(window).scroll(pcScroll); //scroll


    pcScroll();


   $('.dot li').click(function(e){
    e.preventDefault();
    let i = $(this).index();
        i += 3;
    let sections = $('section').eq(i).offset().top;
    $('html,body').animate({
        'scrollTop' : sections
    })

   });

   
   

}

let winWidth = $(window).width();

if(winWidth >= 1200){

    pcLayout();

}