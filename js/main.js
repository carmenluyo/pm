 $(document).ready(function(){

    //carouseles

    //grid courses carousel
      $('.js-carousel-courses').owlCarousel({
        items:4,
        loop:false,
        margin:10,
        stagePadding: 50,
        nav: true,
        navigation : true,
        navigationText : ['<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-left fa-stack-1x fa-inverse"></i></span>','<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-right fa-stack-1x fa-inverse"></i></span>'],
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
