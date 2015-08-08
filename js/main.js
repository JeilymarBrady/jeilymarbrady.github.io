//////////////////////////////
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
//////////////////////////////


//////////////////////////////
/* ***************************
  Code from CSS-Tricks Forum
  author:  Chris McClean
  http://wheelercentral.net
***************************** */

$(document).ready(function() {
   $('a[href*=#]').bind('click', function(e) {
  e.preventDefault(); //prevent the "normal" behaviour which would be a "hard" jump

  var target = $(this).attr("href"); //Get the target

  // perform animated scrolling by getting top-position of target-element and set it as scroll target
  $('html, body').stop().animate({ scrollTop: $(target).offset().top - 69.5}, 1500, function() {
       //location.hash = target; //attach the hash (#jumptarget) to the pageurl
  });

  return false;
   });
});
//////////////////////////////


//////////////////////////////
// Portfolio Slides
var currentIndex = 0,
  items = $('.portfolioContainer div'),
  itemAmt = items.length;

function cycleItems() {
  var item = $('.portfolioContainer div').eq(currentIndex);
  items.hide();
  item.css('display','inline-block');
}

var autoSlide = setInterval(function() {
  currentIndex += 1;
  if (currentIndex > itemAmt - 1) {
    currentIndex = 0;
  }
  cycleItems();
}, 3000);

$('.next').click(function() {
  clearInterval(autoSlide);
  currentIndex += 1;
  if (currentIndex > itemAmt - 1) {
    currentIndex = 0;
  }
  cycleItems();
});

$('.prev').click(function() {
  clearInterval(autoSlide);
  currentIndex -= 1;
  if (currentIndex < 0) {
    currentIndex = itemAmt - 1;
  }
  cycleItems();
});
//////////////////////////////
