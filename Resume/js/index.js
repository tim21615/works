$(".resume").width($(window).width()*0.7);
$(".resume").height($("#heightDetect").height()+60);

var cvH = $("#heightDetect").height()+60+100;
$(".resume").css("bottom",-cvH);



$(window).resize(function(){
  $(".resume").css("transition-delay","0");
  $(".resume").css("transition","0");
  $(".resume").width($(window).width()*0.7);
  
  $(".resume").height($("#heightDetect").height()+60);

  cvH = $("#heightDetect").height()+60+100;
  $(".resume").css("bottom",-cvH);
  
})

$("#welcome").click(function(){
  $("body").css("background-color","#66CC82"); 
  $("html").css("background-color","#66CC82");
  setTimeout(function(){
    $(".headpic").css("opacity","0");
  },2000);
  
  setTimeout(function(){
    $(".headpic").css("display","none");
    $(".contact").css("opacity","1");
    $(".bgwords2").css("opacity","1")
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
  },2500);
  
    setTimeout(function(){
      $(".headpic").css("transition","2s")
      $(".headpic").css("opacity","0");
      
    },3600);
  
    setTimeout(function(){
      $(".headpic").css("display","none");
      $(".bgwords1").css("opacity","1");
    },5300);
  
});

$(".smallbutton").click(function(){
  
  
  $("html").css("transition","3s");
  $("body").css("transition","3s");
  
  $('html, body').animate({
                   scrollTop: $(".headpic").offset().top
               }, 2000);

  
})

$(".button").click(function(){
  $(".button").css("opacity",'0');
  $(".headpic").css("margin-top","90px");
  $(".line").css("bottom","-55px");
  $(".resume").css("opacity","1");
  $(".resume").css("transition-delay","3s");
  
  
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
  setTimeout(function(){ 
    $("#a6").addClass("animation"); 
 }, 5000);  
  setTimeout(function(){ 
    $("#a7").addClass("animation"); 
 }, 5200);  
  setTimeout(function(){ 
    $(".h").addClass("animation_right"); 
 }, 5300);  
  setTimeout(function(){ 
    $(".info").css("opacity","1"); 
    $(".info").css("top","0"); 
 }, 8000); 
  setTimeout(function(){ 
    
    $("i.fas.fa-balance-scale").css("color","#66CC82"); 
 }, 11000); 
  
});