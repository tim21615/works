
  //--navbar scroll調整

  $(window).scroll(function(evt){
  if ($(window).scrollTop()>0){
    
    $("nav").css("background-color","#29bb9c");
    $(".nav-link").css("color","#eee");
    $(".slogan").css("font-size","16px")
}else{
  $("nav").css("background-color","transparent");
  $(".nav-link").css("color","#333");
  $(".slogan").css("font-size","12px")
}
  
  
});