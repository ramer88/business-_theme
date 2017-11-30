$(document).ready(function () {
  $('.sandwich-menu').click(function() {
    $(this).toggleClass('active');
    $('header ul.nav').toggleClass('sandwich-menu-link');
  });
  $(function(){
    $(window).scroll(function() {
    var top = $(document).scrollTop();
    if (top < 10) $("#fixmenu").css({top: '0',
                                      position: 'relative',
                                      width: '100%',
                                      maxWidth: '1154px',
                                      backgroundColor: '#fff'});
    else $("#fixmenu").css({top: '0',
                            position: 'fixed',
                            width: '100%',
                            maxWidth: '1700px',
                            backgroundColor: 'rgba(0,0,0,.7)',
                            paddingLeft: '10px'});
    });
});
    svg4everybody({});
});

var btn_prev = document.querySelector('.left-arrow');
var btn_next = document.querySelector('.right-arrow');

var images = document.querySelectorAll('.slider-container .slide');
var i = 0;

var points = document.querySelectorAll('.slider-point .point');
var i = 0;
var j = 0;

btn_prev.onclick = function(){
     images[i].classList.toggle( 'showed' );
     i = i - 1; /* i-- */
     
     if(i < 0){
         i = images.length - 1;
     }
     
     images[i].classList.toggle( 'showed' );

     points[j].classList.toggle( 'active' );
     j = j - 1; /* j-- */
     
     if(j < 0){
         j = images.length - 1;
     }
     
     points[j].classList.toggle( 'active' );

}

btn_next.onclick = function(){
     images[i].classList.toggle( 'showed' );
     i = i + 1; /* i++ */
     
     if(i >= images.length){
         i = 0;
     }
     
     images[i].classList.toggle( 'showed' );

     points[j].classList.toggle( 'active' );
     j = j + 1; /* j++ */
     
     if(j >= points.length){
         j = 0;
     }
     
     points[j].classList.toggle( 'active' );
}

var mouseOverSlider = false;

$('.slider').on('mouseover', () => mouseOverSlider = true);
$('.slider').on('mouseout', () => mouseOverSlider = false);

function go(){
     if (mouseOverSlider) return;

     images[i].classList.toggle( 'showed' );
     i = i + 1; /* i++ */
     
     if(i >= images.length){
         i = 0;
     }
     
     images[i].classList.toggle( 'showed' );

     points[j].classList.toggle( 'active' );
     j = j + 1; /* j++ */
     
     if(j >= points.length){
         j = 0;
     }
     
     points[j].classList.toggle( 'active' );
}

setInterval(go, 2500);



