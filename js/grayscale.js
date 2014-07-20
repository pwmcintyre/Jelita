//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 0) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top //+150
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

(function($){
    $('#thumbcarousel').carousel(0);
    var $thumbItems = $('#thumbcarousel .item');
    $('#carousel').on('slide.bs.carousel', function (event) {
       var $slide = $(event.relatedTarget);
       var thumbIndex = $slide.data('thumb');
       var curThumbIndex = $thumbItems.index($thumbItems.filter('.active').get(0));
        if (curThumbIndex>thumbIndex) {
            $('#thumbcarousel').one('slid.bs.carousel', function (event) {
                $('#thumbcarousel').carousel(thumbIndex);
            });
            if (curThumbIndex === ($thumbItems.length-1)) {
                $('#thumbcarousel').carousel('next');
            } else {
                $('#thumbcarousel').carousel(numThumbItems-1);
            }
        } else {
            $('#thumbcarousel').carousel(thumbIndex);
        }
    });
})(jQuery);

//Google Map Skin - Get more at http://snazzymaps.com/
var myOptions = {
    zoom: 9,
    center: new google.maps.LatLng(6.302184, 99.8503629),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    disableDefaultUI: false,
    
    navigationControl: false,
    mapTypeControl: false,
    scaleControl: false,
    draggable: false,
    scrollwheel: false,
    // mapTypeId: google.maps.MapTypeId.ROADMAP,
      
    styles: [{
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{
            "color": "#000000"
        }, {
            "lightness": 17
        }]
    }, {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [{
            "color": "#000000"
        }, {
            "lightness": 20
        }]
    }, {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#000000"
        }, {
            "lightness": 17
        }]
    }, {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [{
            "color": "#000000"
        }, {
            "lightness": 29
        }, {
            "weight": 0.2
        }]
    }, {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [{
            "color": "#000000"
        }, {
            "lightness": 18
        }]
    }, {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [{
            "color": "#000000"
        }, {
            "lightness": 16
        }]
    }, {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [{
            "color": "#000000"
        }, {
            "lightness": 21
        }]
    }, {
        "elementType": "labels.text.stroke",
        "stylers": [{
            "visibility": "on"
        }, {
            "color": "#000000"
        }, {
            "lightness": 16
        }]
    }, {
        "elementType": "labels.text.fill",
        "stylers": [{
            "saturation": 36
        }, {
            "color": "#000000"
        }, {
            "lightness": 40
        }]
    }, {
        "elementType": "labels.icon",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [{
            "color": "#000000"
        }, {
            "lightness": 19
        }]
    }, {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#000000"
        }, {
            "lightness": 20
        }]
    }, {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [{
            "color": "#000000"
        }, {
            "lightness": 17
        }, {
            "weight": 1.2
        }]
    }]
};

var map = new google.maps.Map(document.getElementById('map'), myOptions);

var marker = new google.maps.Marker({
    map:map,
    draggable:false,
    animation: google.maps.Animation.DROP,
    position: new google.maps.LatLng(6.302184, 99.8503629)
  });

