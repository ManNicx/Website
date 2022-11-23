$(document).ready(function(){
  
  $("#home").click(function(){
    $(".exp").hide();
    $(".contact").hide();
    $(".home").show();
   
    $(".portfolio").show();
    $(".attach").show();
    $(".phil").show();
  });
  
  $("#con").click(function(){
  
    $(".contact").show();
    $(".home").hide();
    $(".exp").hide();
    $(".portfolio").hide();
    $(".attach").hide();
    $(".phil").hide();
  })
  $("#about").click(function(){
    
    $(".exp").show();
    
    $(".home").hide();
    $(".portfolio").hide();
    $(".attach").hide();
    $(".phil").hide();
    $(".contact").hide();
  });
  
});
