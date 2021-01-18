function getAnimation() {
  $(".animate").each(function() {
    if( $(this).offset().top <= $(document).scrollTop() + $(window).height() ) {
      $(this).addClass("active");
    }
  });
}

var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;


$(window).load(function() {



});

$(window).resize(function() {

  getAnimation();

});

$(document).scroll(function() {

  getAnimation();

});

$(document).ready(function() {

  getAnimation();

    // if( $(".portfolio_slider").length > 0 ) {
    //     $(".portfolio_slider").not(".slick-initialized").slick({
    //         dots: true,
    //         arrows: true,
    //         autoplay: true,
    //         autoplaySpeed: 4000,
    //         speed: 1200,
    //         slidesToShow: 4,
    //         slidesToScroll: 1,
    //         // fade: true,
    //         responsive: [
    //             {
    //               breakpoint: 900,
    //               settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 2
    //               }
    //             },
    //             {
    //               breakpoint: 540,
    //               settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //               }
    //             }
    //           ]
    //     });
    // }

    $(".dropdown_box").each(function() {
      if($(this).hasClass("active")) {
        $(this).find(".dropdown").css({
          "display" : "block"
        });
      }
    });

    $(".dropdown_box_title").on("click", function(e) {
      e.preventDefault();
      parentBlock = $(this).closest(".dropdown_box");
      dropdown = parentBlock.find(".dropdown");
      if(dropdown.is(":hidden")) {
        dropdown.slideDown(300);
        parentBlock.addClass("active");
      } else {
        dropdown.slideUp(300);
        parentBlock.removeClass("active");
      }
    });

});