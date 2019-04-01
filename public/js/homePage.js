$('.your-class').slick({
    dots: false,
    arrows: false,
    infinite: false,
    speed: 300,
    autoplay:true,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
          arrows: false,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  // $(window).scroll(function() {
  //   if ($(this).scrollTop() > 1){  
  //     $('.container').addClass("container-fluid");
  //   }
  //   else {
  //     $('.abc').removeClass("container");
  //     $('.abc').addClass("container-fluid");
  //   }
  // });