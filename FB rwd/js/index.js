$("#menu").click(function(){
    $(".drop-down").toggle();

    if($(".drop-down").is(':hidden')){
      $("#menu").css("color","black");
    }
    else{
      $("#menu").css("color","white");
    }

  });


$(document).mouseup(function(e){
  var _con = $("#menu");   // 设置目标区域
  if(!_con.is(e.target) && _con.has(e.target).length === 0){ // Mark 1
       if(!($(".drop-down").is(':hidden'))){
         $(".drop-down").toggle();
         $("#menu").css("color","black");
         
       }
  }
});