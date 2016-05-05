//jQuery(document).ready(function($){
  // Get current path and find target link
  //var path = window.location.pathname.split("/").pop();
  
  // Account for home page with empty path
  //if ( path == '' ) {
  //  path = 'index.html';
  //}
      
  //var target = $('nav a[href="'+path+'"]');
  // Add active class to target link
  //target.addClass('active');
//});



//$('.menu').on('click', 'a', function() {
 //   $('.menu a.active').removeClass('active');
 //   $(this).addClass('active');
//});

//$('.menu a').click(function() {
 //   $(this).addClass('active').siblings().removeClass('active');
//});

// $('.menu li a').click(function() {
//
//    $('.menu li a.active').removeClass('active');
 //   $(this).addClass('active');
//});
jQuery(document).ready(function($)
 $('ul.menu li a').click(function(e) {
        e.preventDefault();
        $('a').removeClass('active');
        $(this).addClass('active');
    });
 });