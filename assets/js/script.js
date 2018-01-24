
  $('.offers').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 3,
        nav: true
      },
      1000: {
        items: 5,
        nav: true,
        loop: true
      }
    }
  })

  $('.partners').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayHoverPause: true,

    responsive: {
      0: {
        items: 1,
        nav: true,
        loop: true
      },
      600: {
        items: 3,
        nav: true,
        loop: true
      },
      1000: {
        items: 5,
        nav: true,
        loop: true
      }
    }
  })
