setInterval("test()",0);
function test(){
   var a = $("html,body").scrollTop();
   if( a>0  && a<1100 ){  
       $("header").css({ background: "#fff"  });
   }else if( a>=1000 && a<2100 ){
       $("header").css({ background: "rgba(255,255,255,0.8)"  });
};

   if(a>=0 && a<1300){ //intro
       $("aside li").css({ background:"#344098" , color:"#fff"});
       $("aside li:eq(0)").css({ background: "rgba(255,255,255,0.4)", color:"#344098"});

   }else if(a>=1300 && a<2100){ //program
       $("aside li").css({ background: "#344098", color:"#fff" });
       $("aside li:eq(1)").css({ background: "rgba(255,255,255,0.4)", color:"#344098" });

   }else if(a>=2100 && a<3200){ //calendar
       $("aside li").css({ background: "#344098", color:"#fff" });
       $("aside li:eq(2)").css({ background: "rgba(255,255,255,0.4)", color:"#344098" });

   }else if(a>=3200 && a<4000){ //place
       $("aside li").css({ background: "#344098", color:"#fff" });
       $("aside li:eq(3)").css({ background: "rgba(255,255,255,0.4)", color:"#344098" });
   };

};


$(function(){

    $(".calendar").mouseover(function(){
           $("footer").stop().animate({height:"60px"});
    });
    $(".place").mouseover(function(){
           $("footer").stop().animate({height:"240px"});
    });
   $("#header_wrap>p").click(function(){
       $("nav").stop().animate({marginRight:0});
   });
   $("nav>p").click(function(){
       $("nav").stop().animate({marginRight:"-100%"});
   });

 
  $("header,#container").css({ marginTop:"-100px" });
  $(".content_wrap").hide();
  $("header").animate({ marginTop:0 },function(){
       $("#container").animate({ marginTop:"80px" });
       $(".content_wrap").fadeIn();
  });

  $(".gnb li").mouseover(function(){
    $(".select_line").stop().animate({ marginLeft: 530+( 170*$(this).index()  ) },"fast");
  });

  $("section").mouseover(function(){
    $(".select_line").stop().animate({ marginLeft: 530+( 170* ($(this).index()-1)  ) },"fast");
  });
  $(".gnb li:eq(0)").click(function(){
    $("html,body").animate({ scrollTop: 0* $(this).index() });
  });
  $(".gnb li:eq(1)").click(function(){
    $("html,body").animate({ scrollTop: 1200* $(this).index() });
  });
  $(".gnb li:eq(2)").click(function(){
    $("html,body").animate({ scrollTop: 1150* $(this).index() });
  });
  $(".gnb li:eq(3)").click(function(){
    $("html,body").animate({ scrollTop: 1150* $(this).index() });
  });


  $("#container>p").click(function(){
      $("html,body").animate({ scrollTop: 0 });
  });

  $(".intro li").mouseover(function(){  
      $(this).children("p:first").stop().animate({ marginTop: "-200px"  });
  });
  $(".intro li").mouseleave(function(){  
      $(this).children("p:first").stop().animate({ marginTop: 0 });
  });
       
});




/*메뉴 버튼*/
$(function(){
    
    $(".nav_btn").click(function(){
        $('nav').show();
        $('.select_line').show();
    });
    $(".close_btn").click(function(){
        $('.select_line').hide();
    });
});












