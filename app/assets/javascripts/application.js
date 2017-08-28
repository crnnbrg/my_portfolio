// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require bootstrap-sprockets

$('#main-nav').affix({
    offset: {
        top: $('#main-nav').offset().top
    }
});

// if((window.scrollY > 100) && (window.innerWidth >= 878)) {
  //   $('nav').css({backgroundColor: '#5E5B68 !important'});
  //   $('.navbar').css({border: '1px solid transparent'});
  //   $('.navbar-nav').css({margin: '0 -15px'});
  //   $('.navbar-header a.navbar-brand').css({padding: '0', fontSize: '50px'});
  //   $('#menu-nav a.page-scroll').css({fontSize: '18px', opacity: '1'});
  //   $('#menu-nav a.page-scroll').mouseover(function() {
  //     $(this).css({backgroundColor: '#EFE7D1', color: '#5E5B68'});
  //   });
  //   $('#menu-nav a.page-scroll').mouseout(function() {
  //     $(this).css({backgroundColor: 'transparent', color: '#EFE7D1'});
  //   });
  // } else {
  //   $('nav').css({backgroundColor: 'transparent !important'});
  //   $('.navbar').css({border: 'none'});
  //   $('.navbar-nav').css({margin: '20px 20px 0 0'});
  //   $('.navbar-header a.navbar-brand').css({padding: '20px 0 0 20px', fontSize: '70px'});
  //   $('#menu-nav a.page-scroll').css({fontSize: '20px', opacity: '0.7'});
  //   $('#menu-nav a.page-scroll').mouseover(function() {
  //     $(this).css({backgroundColor: 'transparent', color: '#EFE7D1'});
  //   });
  //   $('#menu-nav a.page-scroll').mouseout(function() {
  //     $(this).css({backgroundColor: '#EFE7D1', color: '#5E5B68'});
  //   });
  // };

document.addEventListener('click', function() {
  if($('button').hasClass('collapsed') === false) {
    $('ul.navbar-nav li').css('border-bottom', '1px solid rgba(255, 255, 255, .3)');
    $('ul.navbar-nav li:last-child').css('border', 'none');
  } else
    $('ul.navbar-nav li').css('border', 'none');
});

var techPanel = $('#technology-name-panel');
$('#tech-image-list img').mouseover(function() {
  switch(this.id) {
    case 'html5-icon': techPanel.html('HTML5').css({backgroundColor: '#F0652A', color: '#fff', boxShadow: '3px 2px 6px 0px rgba(0,0,0,0.75)'}); break;
    case 'css3-icon': techPanel.html('CSS3').css({backgroundColor: '#33A9DC', color: '#fff', boxShadow: '3px 2px 6px 0px rgba(0,0,0,0.75)'}); break;
    case 'javascript-icon': techPanel.html('JavaScript').css({backgroundColor: '#F0DB4F', color: '#323330', boxShadow: '3px 2px 6px 0px rgba(0,0,0,0.75)'}); break;
    case 'jquery-icon': techPanel.html('jQuery').css({backgroundColor: '#0769AD', color: '#78CFF5', boxShadow: '3px 2px 6px 0px rgba(0,0,0,0.75)'}); break;
    case 'github-icon': techPanel.html('GitHub').css({backgroundColor: '#282828', color: '#fff', boxShadow: '3px 2px 6px 0px rgba(0,0,0,0.75)'}); break;
    case 'nodejs-icon': techPanel.html('Node.js').css({backgroundColor: '#46483E', color: '#81CF08', boxShadow: '3px 2px 6px 0px rgba(0,0,0,0.75)'}); break;
}});

$('.slick-center').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
