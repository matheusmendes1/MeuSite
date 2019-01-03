$(document).ready(function() {

  $("#myCarousel").on("slide.bs.carousel", function(e) {
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
            .appendTo(".carousel-inner");
        } else {
          $(".carousel-item")
            .eq(0)
            .appendTo($(this).find(".carousel-inner"));
        }
      }
    }
  });
  
});

$(".equipe").hide();
$(".carousel-item .back").hide();
$(".descricao .led").hide();
$(".descricao .fotovoltaico").hide();

window.onscroll = () => {
    const nav = document.querySelector('#navbar');
    if(this.scrollY <= 10) nav.classList.remove('scroll'); 
    else nav.classList.add('scroll');
  };

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

$('#dynamic').on('click', function() {

  $(this).lightGallery({
    share: false,
    facebook: false,
    download: false,
      dynamic: true,
      dynamicEl: [{
          "src": 'images/projetos/residencialCoro/residencial1.png',
          'thumb': 'images/projetos/residencialCoro/residencial1.png',
      }, {
          'src': 'images/projetos/residencialCoro/residencial2.png',
          'thumb': 'images/projetos/residencialCoro/residencial2.png',
          
      }, {
          'src': 'images/projetos/residencialCoro/residencial3.png',
          'thumb': 'images/projetos/residencialCoro/residencial3.png',
          
      }
      , {
        'src': 'images/projetos/residencialCoro/residencial4.png',
        'thumb': 'images/projetos/residencialCoro/residencial4.png',
        
    }]
  })

});

$('#fotos').on('click', function() {

  $(this).lightGallery({
    share: false,
    facebook: false,
    download: false,
      dynamic: true,
      dynamicEl: [{
          "src": 'images/projetos/posto/posto.png',
          'thumb': 'images/projetos/posto/posto.png',
      }, {
          'src': 'images/projetos/residencialCoro/residencial2.png',
          'thumb': 'images/projetos/residencialCoro/residencial2.png',
          
      
        
    }]
  })

});