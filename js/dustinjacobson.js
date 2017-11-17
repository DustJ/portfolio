$(document).ready(function(){
	// Potfolio Sample Slider
  $('.promo-slider').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 3
  });

  // Mobile Menu
  $('nav').meanmenu();

  // Magnific Popup
  $('.sortable-portfolio').magnificPopup({
  	type:'image',
  	delegate: 'a',
  	gallery:{enabled:true},
  	image: {titleSrc:'title'}
  });

});


// Single Page Nav Scrolling
$('#nav').onePageNav({
	currentClass: 'current',
	changeHash: false,
	scrollSpeed: 750,
	scrollThreshold: 0.5,
	filter: '',
	easing: 'swing',
	begin: function() {
		//I get fired when the animation is starting
	},
	end: function() {
		//I get fired when the animation is ending
	},
	scrollChange: function($currentListItem) {
		//I get fired when you enter a section and I pass the list item of the section
	}
});



// Portfolio Sorting
var containerEl = document.querySelector('.sortable-portfolio');
var mixer = mixitup(containerEl, {
					    animation: {
					        effects: 'fade scale stagger(50ms)' // Set a 'stagger' effect for the loading animation
					    },
					    load: {
					        filter: 'none' // Ensure all targets start from hidden (i.e. display: none;)
					    }
						});

// Add a class to the container to remove 'visibility: hidden;' from targets. This
// prevents any flickr of content before the page's JavaScript has loaded.

containerEl.classList.add('mixitup-ready');

// Show all targets in the container

mixer.show()
    .then(function() {
        // Remove the stagger effect for any subsequent operations

        mixer.configure({
            animation: {
                effects: 'fade scale'
            }
        });
    });


//Animate on scroll
new WOW().init();

//Hero button links


//Dates for the stats break
//Note(DJ): Can't use const, nuked Babel. Moved "vars" here.
var codingYrs = new Date("1997").getFullYear();
var designingYrs = new Date("1994").getFullYear();
var noSleepYrs = new Date("2002").getFullYear();
var todayForYrs = new Date().getFullYear();

var calcYrs = function(elemID, typeYrs) {
	$('#'+elemID).html((todayForYrs - typeYrs - 1)+' years');
}

calcYrs('coding-years',codingYrs);
calcYrs('designing-years',designingYrs);
calcYrs('nosleep-years',noSleepYrs);
