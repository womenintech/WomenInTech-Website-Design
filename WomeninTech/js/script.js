$(document).ready(function() {
  
  //back to top button
  $(window).scroll(function() {
    if( $(this).scrollTop() > 100 ) {
      $('#back-top').fadeIn('slow');
    } else {
      $('#back-top').fadeOut('slow');
    }
  });
  
  $('#back-top').click(function() { 
    $('html, body').animate({
      scrollTop: 0
    }, 1000, 'easeInOutExpo');
    return false;
  });
  
  // Closes responsive menu when a link is clicked
	$('.js-scroll').on("click", function() {
      $('.navbar-collapse').collapse('hide');
	});
  
  $('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		if (target.length) {
		  $('html, body').animate({
		  scrollTop: (target.offset().top)
		}, 1000, "easeInOutExpo");
		return false;
		}
      }
	});
});
                  