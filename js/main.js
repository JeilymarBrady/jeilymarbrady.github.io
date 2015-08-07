/*
  Bounce down animation needs value ‘infinite’ on animation-iteration-count property of animation.

  animation-iteration-count: infinite

  Can have this in a shorthand too, like in the Codepen:

  animation: bounce-down 2s ease infinite;

  And [sometimes it makes sense to postpone the execution of css-animations and transitions until the webpage has fully loaded](http://codepen.io/atelierbram/pen/GFyiC) …

*/
/*
 * http://blog.simonwillison.net/post/57956760515/addloadevent
 * http://www.sitepoint.com/closures-and-executing-javascript-on-page-load/
*/
function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}

// addLoadEvent(nameOfSomeFunctionToRunOnPageLoad);
addLoadEvent(function() {
    /* more code to run on page load */
    /* put class on html-element wheh page is loaded */
    document.documentElement.className = "is-loaded"
});

$(window).scroll(function() {

    if ($(this).scrollTop()>0)
     {
        $('#downArrow').fadeOut();
     }
    else
     {
      $('#downArrow').fadeIn();
     }
 });
/* ***************************
  Code from CSS-Tricks Forum
  author:  Chris McClean
  http://wheelercentral.net
***************************** */

$(document).ready(function() {
  // $('#fullpage').fullpage({
  //       anchors:['top', 'about', 'resume', 'portfolio', 'contactMe']
  //   });
  // $('#fullpage').show('slow/400/fast', function() {
  //       //Navigation
  //       menu: false,
  //       lockAnchors: false,
  //       anchors:['firstPage', 'secondPage'],
  //       navigation: false,
  //       navigationPosition: 'right',
  //       navigationTooltips: ['firstSlide', 'secondSlide'],
  //       showActiveTooltip: false,
  //       slidesNavigation: true,
  //       slidesNavPosition: 'bottom',

  //       //Scrolling
  //       css3: true,
  //       scrollingSpeed: 700,
  //       autoScrolling: true,
  //       fitToSection: true,
  //       scrollBar: false,
  //       easing: 'easeInOutCubic',
  //       easingcss3: 'ease',
  //       loopBottom: false,
  //       loopTop: false,
  //       loopHorizontal: true,
  //       continuousVertical: false,
  //       normalScrollElements: '#element1, .element2',
  //       scrollOverflow: false,
  //       touchSensitivity: 15,
  //       normalScrollElementTouchThreshold: 5,

  //       //Accessibility
  //       keyboardScrolling: true,
  //       animateAnchor: true,
  //       recordHistory: true,

  //       //Design
  //       controlArrows: true,
  //       verticalCentered: true,
  //       resize : false,
  //       sectionsColor : ['#ccc', '#fff'],
  //       paddingTop: '3em',
  //       paddingBottom: '10px',
  //       fixedElements: '#header, .footer',
  //       responsiveWidth: 0,
  //       responsiveHeight: 0,

  //       //Custom selectors
  //       sectionSelector: '.section',
  //       slideSelector: '.slide',

  //       //events
  //       onLeave: function(index, nextIndex, direction){},
  //       afterLoad: function(anchorLink, index){},
  //       afterRender: function(){},
  //       afterResize: function(){},
  //       afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
  //       onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
  //   });
   $('a[href*=#]').bind('click', function(e) {
  e.preventDefault(); //prevent the "normal" behaviour which would be a "hard" jump

  var target = $(this).attr("href"); //Get the target

  // perform animated scrolling by getting top-position of target-element and set it as scroll target
  $('html, body').stop().animate({ scrollTop: $(target).offset().top - 80}, 1500, function() {
       //location.hash = target; //attach the hash (#jumptarget) to the pageurl
  });

  return false;
   });

  //Toggle image for name
  // $("#jeily").click(function(){
  //   $("#jeily img").toggle();
  // });
});
