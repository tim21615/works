var shoplist = [
  {name: "漢堡",price: 200},
  {name: "雞腿",price: 100},
  {name: "抹茶拿鐵",price: 300},
  {name: "薯條",price: 50}
];

var item_url = "https://awiclass.monoame.com/api/command.php?type=get&name=itemdata";

$.ajax({
  url: item_url,
  success: function(res){
    shoplist = JSON.parse(res);
    show_items();
  }
});

var item_html = "<li class='item' id={{id}}>{{num}}.{{item}}<span class='price'>{{price}}</span><span class='delbtn' id={{delid}} data-btn-id={{btn_id}}>X</span></li>";

var total_html ="<li id='total_price'>總價 <span class='price'>{{total_price}}</span></li>";

function show_items(){
  
  var total_price = 0; 
  var current_item_html = "";
  var current_total_html = "";
  
  for(var i = 0;i<shoplist.length;i++){
    
    total_price = total_price + parseInt(shoplist[i].price);  
    
    current_item_html = item_html.replace("{{num}}",i+1)
                                     .replace("{{item}}",shoplist[i].name)
                                     .replace("{{id}}","item_"+i)            //第0個就是item_0
                                     .replace("{{price}}",shoplist[i].price)
                                     
                                     .replace("{{btn_id}}",i);        //data-btn-id自定義屬性
                                                                      //第0個就是0
    $(".cart").append(current_item_html);
  }
    current_total_html = total_html.replace("{{total_price}}",total_price);
    $(".cart").append(current_total_html);
  
  
}


// show_items();

function add_item(){
  shoplist.push(
    {name:$("#product").val(),price:$("#price").val()}
  )
}

//按下新增
$(".add").click(function(){
  add_item();
  $(".cart").html("");
  show_items();
  
  $("#product").val("");
  $("#price").val("");
  //清空使用者輸入
  
});
var del_id;
var num =0
// $(".delbtn").click(function(){
//   num++;
//   del_id = $(this).attr("data-btn-id");
//   shoplist.splice(del_id,1);
//   $(".cart").html("");
//   show_items();
  
// });
// $(".delbtn").click(function(){
//   num++;
//   del_id = $(this).attr("data-btn-id");
//   shoplist.splice(del_id,1);
//   $(".cart").html("");
//   show_items();
  
// });

$(document).on("click", ".delbtn", function(event){
    num++;
    del_id = $(this).attr("data-btn-id");
    shoplist.splice(del_id,1);
    $(".cart").html("");
    show_items();
});