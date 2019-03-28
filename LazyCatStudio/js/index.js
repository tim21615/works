//section_about 換貓
function changeCat(index){
  // 0:左邊 1:左上 2:中間 3:右上 4:右
  
  var position = [".left",".lefttop",".middle",".righttop",".right"];
  for(var i =0; i<position.length ; i++){
    if(i == index){
      $(position[i]).css("opacity",1);
    }else{
      $(position[i]).css("opacity",0);
    }
    
  }
}

$(window).mousemove(function(evt){
  var pageX;
  var pageY;
  
  var cursor_top_limit = $("#section_about").offset().top;
  var cursor_bottom_limit =$("#section_service").offset().top;
  
  
  
  var cat_positionX = $(".cat").offset().left;
  var cat_positionY = $(".cat").offset().top;
  
  var cat_width = $(".cat").css("width");
  
  var mouse_top = (evt.pageY>cursor_top_limit && evt.pageY<cursor_bottom_limit)?(evt.pageY-cursor_top_limit):0
  
  //互動文字, 互動邊界
  $("#firstLine").css("left",evt.pageX/-10);
  $("#secondLine").css("left",mouse_top/-14);
  $("#thirdLine").css("left",mouse_top/-14);
  $("#fourthLine").css("left",mouse_top/14);
  $("#fifthLine").css("left",evt.pageX/-10);
  // $("#sixthLine").css("left",mouse_top/-20)
  // $(".margin").css("right",-550+evt.pageX/4);
  var detectCat = $(window).width()-evt.pageX
  if(detectCat <270 && detectCat >190){
    if($(window).width()>576){
      $(".leftcat").css("bottom","-2px");
    }else{
      $(".leftcat").css("bottom","-52px");
    }
  }else{
    
    $(".leftcat").css("bottom","-130px");
  }
  if(detectCat <=190 && detectCat > 145){
    if($(window).width()>576){
      $(".middlecat").css("bottom","0px");
    }else{
      $(".middlecat").css("bottom","-105px");
    }
  }else{
    $(".middlecat").css("bottom","-150px");
  }
  if(detectCat <= 145 && detectCat > 50){
    if($(window).width()>576){
      $(".rightcat").css("bottom","-5px");
    }else{
      $(".rightcat").css("bottom","-52px");
    }
  }else{
    $(".rightcat").css("bottom","-180px");
  }
  
  
  
  // console.log(evt.pageX)
  
  
  //section_about一半的高度
  var section_aboutH = parseInt($("#section_about").css("height")) / 2;
   
  
  pageX = evt.pageX;
  pageY = evt.pageY - window.scrollY;
  
  $(".cursor").css("left",pageX);
  $(".cursor").css("top",pageY);
  
  
  
  if(evt.pageY >= cursor_top_limit && evt.pageY <= $("#section_service").offset().top ){
    $(".cursor").css("opacity",1);
  }else{
    $(".cursor").css("opacity",0);
  }
  
  //換貓
  
  if(evt.pageY - cursor_top_limit < section_aboutH){
    //高
    
    if(evt.pageX > cat_positionX + (parseInt(cat_width)/2)){
      //右上
     // $(".righttop").css("opacity",1);
      changeCat(3);
    
  }else{
   //$(".lefttop").css("opacity",1);
    changeCat(1);
  }
    
  }else{
    if(evt.pageX > cat_positionX + (parseInt(cat_width)*2/3)){
      //右
     //$(".right").css("opacity",1);
      changeCat(4);
      
    }else if(evt.pageX < cat_positionX + (parseInt(cat_width)/3)){
      //左
    // $(".left").css("opacity",1);
      changeCat(0);
    }else{
      // console.log("中間");
    //$(".middle").css("opacity",1);
      changeCat(2);
    }
  }
  
    

  
  
  
  
  // pageX = evt
  // console.log("pageX:"+evt.pageX +"<br>pageY:"+evt.pageY +"/"+ $("#section_about").offset().top);
});