$(function() {
  var counter = 1;
  var lengthClass = document.querySelectorAll(".carousel-inner .item").length;
  console.log(lengthClass);
  $(".sliderNxt").click(function() {
    if (counter >= 3) {
      return false;
    } else {
      counter = counter + 1;
      console.log(counter);
      check();
    }

  });
  $(".sliderPrvs").click(function() {
    if (counter <= 1) {
      return false;
    } else {
      counter = counter - 1;
      console.log(counter);
      check();
    }
  });

  function check() {
    if (counter == 3) {
      $(".sliderNxt img").removeClass('flip').attr("src", "imgs/sliderPrvs.png").addClass('flip');
    } else if (counter < 3 && counter > 1) {
      $(".sliderNxt img").removeClass('flip').attr("src", "imgs/sliderNext.png");
      $(".sliderPrvs img").removeClass('flip').attr("src", "imgs/sliderNext.png").addClass('flip');
    } else if (counter == 1) {
      $(".sliderPrvs img").removeClass('flip').attr("src", "imgs/sliderPrvs.png");
    }
  }
  $('.owl-carousel').owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 3
      },
      650: {
        items: 3
      },
      850: {
        items: 4
      },
      1050: {
        items: 5
      },
      1300: {
        items: 6
      }
    }
  });
  $('.owl-carousel').on('changed.owl.carousel', function(event) {
    if ($(".owl-prev").hasClass('disabled')) {
      $(".owl-prev").empty().removeClass('sliderleftdis sliderleft').addClass("sliderleftdis");
    } else {
      $(".owl-prev").empty().removeClass('sliderleftdis sliderleft').addClass("sliderleft");
    }
    if ($(".owl-next").hasClass('disabled')) {
      $(".owl-next").empty().removeClass('sliderrightdis sliderright').addClass("sliderrightdis");
    } else {
      $(".owl-next").empty().removeClass('sliderrightdis sliderright').addClass("sliderright");
    }
  });
  $(".owl-prev").empty().addClass("sliderleftdis");
  $(".owl-next").empty().addClass("sliderright");
});
