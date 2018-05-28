 $(document).ready(function(){


 	$('.menu-mobile').click(function(event){
        event.preventDefault();
        $('.menu-responsive').addClass('active-menu');
        $('.r-overlay').addClass('active-overlay');
      }); 

      // js submenu 2do nivel
      function cerrar_submenu(){
        $('.menu-responsive .u-submenu').stop(false).slideUp();
      }

    // funcion  para cerrar menu responsive 
    function cerrar_nav() {
      $('.menu-responsive').removeClass('active-menu');
      $('.r-overlay').removeClass('active-overlay');
    };

    $('.r-overlay').click(function() {
      cerrar_nav();
      cerrar_submenu();
    });

    $('.close-nav').click(function() {
      cerrar_nav();
      cerrar_submenu();
    });


    //carouseles

    //grid courses carousel
          
      var owl = $('.js-carousel-courses');
      owl.owlCarousel({
        items:4,
        loop:true,
        margin:10,
        stagePadding: 50,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 3
          },
          1000: {
            items: 5
          }
        }
    });
});


///

/*
let cursos = document.getElementsByClassName("item");

for (var i = 0; i < cursos.length; i++) {
  cursos[i].onclick = function(ev) {
    let item = ev.currentTarget;
    alert(item.children[0].src)
  }
}
*/

jQuery('.grids-cursos .item').on('click', function(e)  {
    var currentAttrValue = jQuery(this).attr('data-full');
    // Show/Hide Tabs
    jQuery(currentAttrValue).show().siblings().hide();;
    e.preventDefault();
});
