$(document).ready(function() {

  $("#carousel-cards").on("slide.bs.carousel", function(e) {
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 1;
    var totalItems = $(".carousel-item").length;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i = 0; i < it; i++) {
        // append slides to end
        if (e.direction == "left") {
          $(".carousel-item")
            .eq(i)
            .appendTo(".carrousel-inner-cards");
        } else {
          $(".carousel-item")
            .eq(0)
            .appendTo($(this).find(".carrousel-inner-cards"));
        }
      }
    }
  });

  $(window).scroll(function(){
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 300);
  });

});

$(".equipe").hide();
$(".carousel-item .back").hide();
$(".descricao .led").hide();
$(".descricao .fotovoltaico").hide();

  function showOquefazemos(div){
    if(div == "solar"){
      $(".descricao .led").hide();
      $(".descricao .fotovoltaico").hide();
      $(".descricao .solar").show();
    }
    else if(div == "led"){
      $(".descricao .solar").hide();
      $(".descricao .fotovoltaico").hide();
      $(".descricao .led").show();
    }
    else if(div == "fotovoltaico"){
      $(".descricao .solar").hide();
      $(".descricao .led").hide();
      $(".descricao .fotovoltaico").show();
    }
  }
  
  function show(div) {
    if(div == "equipe"){
      $(".btnequipe").addClass("active");
      $(".btnsobre").removeClass("active");
      $(".sobre").hide();
      $(".equipe").show();
    }
    else{
      $(".btnsobre").addClass("active");
      $(".btnequipe").removeClass("active");
      $(".sobre").show();
      $(".equipe").hide();
    }
}

function showProjeto(div, classe) {
  if(classe == "back"){
      $("#"+div+" .front").hide();
      $("#"+div+" .back").show();
  }
  else{
     $("#"+div+" .back").hide();
      $("#"+div+" .front").show();
  }

}
