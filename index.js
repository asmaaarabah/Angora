$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:3,
       margin:10,
        loop:true,
        stagePadding:1,
        autoplay:true,
        autoplayTimeout:3000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            900:{items:3}
        }
        ,
        nav:true,
        animateOut:true,
     
     
        
     

    });
  });


  let aboutOffset = $("#about").offset().top;
  $(window).scroll(function(){
       let Wscroll = $(window).scrollTop();
       if (Wscroll>aboutOffset -50)
       {
           $("#main-nav").css("backgroundColor","#f25454");
      

       }
       else {
        $("#main-nav").css("backgroundColor","transparent");
      
       }
    
   } )


   $(document).ready(function(){

       $("#loading .spinner").fadeOut(1000,function(){
           $("#loading").fadeOut(1000,function(){
               $("body").css("overflow-y","auto")
           })
        })
       })
