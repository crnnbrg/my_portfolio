$(document).ready(function () {
  $(".navbar a").on('click', function(e) {
    if (this.hash !== "") {
      e.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
        window.location.hash = hash;
      });
    }
  });
});

$(window).scroll(function() {
  if ($(window).scrollTop() > window.innerHeight - 55) {
    $(".navbar").removeClass("transparent");
    $(".back-to-top").fadeIn(300);
  } else {
    $(".navbar").addClass("transparent");
    $(".back-to-top").fadeOut(300);
  }
});
