//header js
$(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
  
    if (scroll >= 80) {
      $("#header").addClass("header-fixed");
    } else {
      $("#header").removeClass("header-fixed");
    }
  });