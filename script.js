/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
jQuery(document).ready(function(){
   
    jQuery('a[href^="#"]').click(function(e) {

        jQuery('html,body').animate({ scrollTop: jQuery(this.hash).offset().top}, 1000);

        return false;

        e.preventDefault();

    });

});


$(function() {
    $('body').removeClass('fade-out');
});






$(document).ready(function() {
$( "#section1 a, #section3 a, #section4 a" ).mouseover(function() {
$(this).css("color",getRandomColor());
});

function getRandomColor () {
 var letters = '0123456789ABCDEF'.split('');
 var color = '#';
 for (var i = 0; i < 6; i++) {
     color += letters[Math.floor(Math.random() * 16)];
 }
 return color;
    }
})



$(document).ready(function() {
$( ".cover" ).mouseover(function() {
$(this).css("color",getRandomColor());
});

function getRandomColor () {
 var letters = '0123456789ABCDEF'.split('');
 var color = '#';
 for (var i = 0; i < 6; i++) {
     color += letters[Math.floor(Math.random() * 16)];
 }
 return color;
    }
})


$(document).on('mousemove', (event) => {
  $('.follower').css({
    left: event.clientX,
    top: event.clientY,
  });
});