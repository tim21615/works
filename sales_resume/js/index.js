$(".restart").click(function(){
  $(".alive").css("opacity","1");
  $(".alive").css("z-index","7");
  $(".alive").addClass("addani");
  $(".bgwords4").css("display","block");
  $(".bgwords4").css("opacity","1");
  $(".bgwords1").css("display","none");
  
  
  setTimeout(function(){   
    location.reload();
 } , 2000); 
  
  
});

$(".bgwords3").click(function(){
  location.reload();
});



var len = $(".dest").length;

function adjustDes(){
  // alert(len);
  var infoWidth = $(".info").width();
  
  
  
for(var i = 1;i<=len;i++ ){
  var DestWidth = $(".dest"+i).width();
$(".des"+i).css("width",infoWidth-DestWidth-20);
}
  
}
adjustDes();



$(window).resize(function(){
  $(".resume").css("transitionDelay","0");
  $(".resume").css("transition","0");
  
  
  if($(".headpic").css('margin-top')==='90px'){
  $(".resume").attr('id', 'noTransit');
  }
  $(".resume").width($(window).width()*0.7);
 setTimeout(function(){ 
    
    adjustDes();
 } , 600); 
  
  
  
  // $(".resume").height($("#heightDetect").height()+60);

  // cvH = $("#heightDetect").height()+60+100;
  // $(".resume").css("bottom",-cvH);
  
});

$("#welcome").click(function(){
  $("body").css("background-color","#66CC82"); 
  $("html").css("background-color","#66CC82");
  setTimeout(function(){
    $(".headpic").css("opacity","0");
    
  },2000);
   setTimeout(function(){
    
    $(".resume").css("opacity","0");
     $(".contact").css("display","block");
    $(".bgwords2").css("display","block");
    $(".bgwords3").css("display","block");
    
  },3100);
  
  setTimeout(function(){
    
    $(".headpic").css("display","none");
    $(".resume").css("display","none");
    $(".contact").css("opacity","1");
    $(".bgwords2").css("opacity","1");
    $(".bgwords3").css("opacity","1");
    $(".restart").css("display","none");
  },4200);
  
  
  
});

$("#reject").click(function(){
 
  $("body").css("background-color","#C64029"); 
  $("html").css("background-color","#C64029");
  
  setTimeout(function(){
    $("#a1").addClass("lefttop");
    $("#a2").addClass("rightbottom");
    $("#a3").addClass("leftbottom");
    $("#a4").addClass("lefttop");
    $("#a5").addClass("righttop");
    $("#a6").addClass("leftbottom");
    $("#a7").addClass("rightbottom");
    $(".h").addClass("righttop");
    $(".italic").addClass("lefttop");
    $(".info").addClass("leftbottom");
    $("#hr1").addClass("rightbottom");
    
    $(".bgwords3").css("display","none");
    $(".contact").css("display","none");
    $(".bgwords2").css("display","none");
  },2500);
  
    setTimeout(function(){
      // $(".headpic").css("transition","2s");
      $(".headpic").css("opacity","0");
      //$(".resume").css("opacity","0");
      
    },3700);
  setTimeout(function(){
      // $(".headpic").css("transition","2s");
      //$(".headpic").css("opacity","0");
      $(".resume").css("opacity","0");      $(".bgwords1").css("display","block");
      
    },4800);
  
    setTimeout(function(){
      
      $(".headpic").css("display","none");
      $(".resume").css("display","none");
      $(".bgwords1").css("opacity","1");
    },5300);
  setTimeout(function(){
    $(".restart").css("opacity","1");
  $(".restart").addClass("Restart_ani");
    
  },6600);
  
});

$(".smallbutton").click(function(){
  
  // $(".resume").removeAttr("id");
  // $(".resume").css("transition","1s");
  $("html").css("transition","3s");
  $("body").css("transition","3s");
  $(".resume").attr('id', 'Transit');
  
  $('html, body').animate({
                   scrollTop: $(".headpic").offset().top
               }, 2000);

  
});

$(".button").click(function(){
  
  // $(".resume").css("display","block");
  $(".button").css("opacity",'0');
  $(".headpic").css("margin-top","90px");
  $(".line").css("bottom","-55px");
  $(".resume").css("opacity","1");
  $(".resume").css("transition-delay","3s");
  $(".button").css("cursor","default");
  
  
  setTimeout(function(){ 
    $("#a1").addClass("animation"); 
 }, 4000);  
  setTimeout(function(){ 
    $("#a2").addClass("animation"); 
 }, 4200);  
  setTimeout(function(){ 
    $("#a3").addClass("animation"); 
 }, 4400);  
  setTimeout(function(){ 
    $("#a4").addClass("animation"); 
 }, 4600);  
  setTimeout(function(){ 
    $("#a5").addClass("animation"); 
 }, 4800);  
//   setTimeout(function(){ 
//     $("#a6").addClass("animation"); 
//  }, 5000);  
//   setTimeout(function(){ 
//     $("#a7").addClass("animation"); 
//  }, 5200);  
  setTimeout(function(){ 
    $(".h").addClass("animation_right"); 
 }, 4900);  
  setTimeout(function(){ 
    $(".info").css("opacity","1"); 
    $(".info").css("top","0"); 
 }, 8000); 
  setTimeout(function(){ 
    
    $("i.fas.fa-balance-scale").css("color","#66CC82"); 
 }, 11000); 
  
});