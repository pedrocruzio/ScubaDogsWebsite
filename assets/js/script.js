$("#owl-demo").owlCarousel({
    navigation : true
  });

$('.partners').owlCarousel({
  loop: true, margin: 10,
  // autoplay: true,
  autoplayHoverPause: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
      loop: true
    },
    800: {
      items: 3,
      nav: true,
      loop: true
    },
    1200: {
      items: 4,
      nav: true,
      loop: true
    }
  }
})

$('.offers').owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  autoplay: true,
  autoplayHoverPause: true,
  navText: [
    "<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"
  ],
  responsive: {
    0: {
      items: 1,
      nav: true
    },
    600: {
      items: 2,
      nav: true
    },
    1000: {
      items: 3,
      nav: true,
      loop: true
    }
  }
})
