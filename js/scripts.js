// function isInViewport(node) {
//   var rect = node.getBoundingClientRect()
//   return (
//     (rect.height > 0 || rect.width > 0) &&
//     rect.bottom >= 0 &&
//     rect.right >= 0 &&
//     rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
//     rect.left <= (window.innerWidth || document.documentElement.clientWidth)
//   )
// }

function getAnimation() {
  $(".animate").each(function() {
    if( $(this).offset().top <= $(document).scrollTop() + $(window).height() ) {
      $(this).addClass("active");
    }
  });
}

function getHeaderParams() {
    if($(document).scrollTop() > 10 && bodyWidth <= 900) {
        $(".header_fix").addClass("bg");
        $(".respmenubtn").addClass("dark");
    } else {
        $(".header_fix").removeClass("bg");
        $(".respmenubtn").removeClass("dark");
    }
}

function getThumbsParams() {
  $(".categorie_thumb").each(function() {
    $(this).css({
      "height" : $(this).width() + "px"
    });
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
  bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;
  getAnimation();
  getHeaderParams();
  getThumbsParams();

});

$(document).scroll(function() {
  getAnimation();
  getHeaderParams();
});

$(document).ready(function() {
  bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;
  getAnimation();
  getHeaderParams();
  getThumbsParams();

    if( $(".object_slider").length > 0 ) {
        $(".object_slider").not(".slick-initialized").slick({
            dots: true,
            arrows: true,
            // autoplay: true,
            autoplaySpeed: 4000,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            appendDots: ".object_slider_dots",
            appendArrows: ".object_slider_controls",
            prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"></button>',
            nextArrow: '<button class="slick-next" aria-label="Next" type="button"></button>'
        });
    }

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


  // Populate images from data attributes.
  // var scrolled = $(window).scrollTop()
  // $('.parallax').each(function(index) {
  //     var imageSrc = $(this).data('image-src')
  //     var imageHeight = $(this).data('height')
  //     $(this).css('background-image','url(' + imageSrc + ')')
  //     $(this).css('height', imageHeight)

  //     // Adjust the background position.
  //     var initY = $(this).offset().top
  //     var height = $(this).height()
  //     var diff = scrolled - initY
  //     var ratio = Math.round((diff / height) * 100)
  //     $(this).css('background-position','center ' + parseInt(-(ratio * 1.5)) + 'px')
  // })

  // // Attach scroll event to window. Calculate the scroll ratio of each element
  // // and change the image position with that ratio.
  // // https://codepen.io/lemagus/pen/RWxEYz
  // $(window).scroll(function() {
  //   var scrolled = $(window).scrollTop()
  //   $('.parallax').each(function(index, element) {
  //     var initY = $(this).offset().top
  //     var height = $(this).height()
  //     var endY  = initY + $(this).height()

  //     // Check if the element is in the viewport.
  //     var visible = isInViewport(this)
  //     if(visible) {
  //       var diff = scrolled - initY
  //       var ratio = Math.round((diff / height) * 100)
  //       $(this).css('background-position','center ' + parseInt(-(ratio * 1.5)) + 'px')
  //     }
  //   })
  // });

  // ------------

  $(".respmenubtn").click(function(e) {
      e.preventDefault();
      if( $("#resp_nav").is(":hidden") ) {
          $("#resp_nav").fadeIn(300);
          $(this).addClass("active");
      } else {
          $("#resp_nav").fadeOut(300);
          $(this).removeClass("active");
      }
  });
  
  $(this).keydown(function(eventObject){
      if (eventObject.which == 27 &&
          $("#resp_nav").is(":visible") &&
          bodyWidth <= 900) {
              $("#resp_nav").fadeOut(300);
              $(".respmenubtn").removeClass("active");
      }
  });

  // ------------

  new universalParallax().init({
    speed: 16.0
});

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {

      // $(".show_link_wrapp")
      // .mousedown(function(e) {
      //   e.preventDefault();
      //   $(this).addClass("over");
      // })
      // .mouseup(function() {
      //   $(this).removeClass("over");
      // });

      $(".show_link_wrapp").click(function(e) {
        e.preventDefault();      
        $(this).toggleClass("over");
        if(!$(this).hasClass("over")) {
          
        }
      });

  }

});