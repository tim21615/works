//重整or剛進入頁面
var s = skrollr.init();

$(".nav-link").click(function(){
  $("html, body").animate({
    scrollTop: $($(this).attr('href')).offset().top }, 2000);
  return false;
});

// $(".nav-link").click(function(){
//   $("html, body").animate({
//     scrollTop: $($.attr(this, 'href')).offset().top }, 2000);
//   return false;
// });

$(".nav-link").hover(function(){
  if ($(window).scrollTop()>0){
  $(this).css("color","white");
  }else{
    $(this).css("color","black");
  }
}, function() {
  if ($(window).scrollTop()>0){
    $(this).css("color", "#eee");
  }else{
    $(this).css("color", "#333");
  }
});
  


$(window).scroll(function(evt){
  if ($(window).scrollTop()>0){
    $("nav").css("background-color","#333");
    $(".navbar-brand").css("color","white");
    $(".nav-link").css("color","#eee");
}else{
  $("nav").css("background-color","transparent");
  $(".navbar-brand").css("color","#000");
  $(".nav-link").css("color","#333");
}
  
  
});
  

if($(window).width()<=700){
  skrollr.init().destroy();
}

if($(window).width()<750){
      $("#name").text("Louisa Coffee");
    }
    else{
      $("#name").text("路易莎 Louisa Coffee");
    }

//resize 視窗觸發
  $( window ).resize(function() {
    if($(window).width()>700){


      var s = skrollr.init();
    }
      else{
        skrollr.init().destroy();
      }

    if($(window).width()<750){
      $("#name").text("Louisa Coffee");
    }
    else{
      $("#name").text("路易莎 Louisa Coffee");
    }
  });

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items:3,
    autoplay:true,
    loop:true,
    margin:20,
    autoplaySpeed:3000,
    autoplayHoverPause:true,
    autoplayTimeout:3000
    
  });
});