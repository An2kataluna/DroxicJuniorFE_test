/*
* Google Maps Implementation
*/
function initialize() {
  var mapCanvas = document.getElementById('googleMap');
  var mapOptions = {zoom:10,center:new google.maps.LatLng(42.2460700,24.650333200000024),
mapTypeId: google.maps.MapTypeId.ROADMAP};
  var map = new google.maps.Map(mapCanvas, mapOptions);
}
google.maps.event.addDomListener(window, 'load', initialize);
/* /Google Maps */

/*
* Jquery Carousel
*/
$(document).ready(function() {
    $('#carousel').roundabout({
        childSelector:"img",
        tilt:-2,
        minOpacity: 3,
        minScale: 0.4,
        btnNext: ".right",
        btnPrev: ".left"

    });
});
/* /Jquery Carousel */

/*
* Vanilla Javascript Slider
*/
var pushHorizontalSlider = new slider('#pushHorizontalSlider',{
    transition: {effect: 'pushInHorizontal'},
    classes: {slider: 'ph-slider',slide: 'ph-slide'}
});

var verticalSlider = new slider('#verticalSlider',{
    classes: {
      navigation: 'tweet-navigation',
      navigationItem: 'tweet-navigation-item',
      direction: 'tweet-directions',
      directionPrev: 'tweet-directions-prev',
      directionNext: 'tweet-directions-next',
      slider: 'tweet-slider',
      slide: 'tweet-slide',
    },
    transition: {effect: 'pushInVertical'},
    autoRun: false,
    navigation: false
});
/* /Vanilla Javascript Slider */
