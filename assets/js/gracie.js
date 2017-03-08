//bizwrap v1.1

/* ==============================================
 Sticky Navbar
 =============================================== */

$(function() {
    $(".navbar").sticky({topSpacing: 0});
});


/*=========================*/
/*====main navigation hover dropdown====*/
/*==========================*/
$(function() {

    $('.js-activated').dropdownHover({
        instantlyCloseOthers: false,
        delay: 0
    }).dropdown();

});

/*========portfolio mix====*/
$('#grid').mixitup();

/*========tooltip and popovers====*/

$("[data-toggle=popover]").popover();

$("[data-toggle=tooltip]").tooltip();


/*=========================*/
 /*========Animation on scroll with wow.js====*/
 /*==========================*/
 
wow = new WOW(
  {
    animateClass: 'animated',
    offset:       100,
    mobile:       true
  }
);
wow.init();