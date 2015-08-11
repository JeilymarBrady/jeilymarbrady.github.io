//////////////////////////////
console.log("88       88 88888888 88         88888    88888   8888   8888 88888888 88\n88       88 88       88        88   88  88   88  88 88 88 88 88       88\n88       88 88       88       88       88     88 88  888  88 88       88\n88  888  88 88888    88       88       88     88 88       88 88888    88\n88 88 88 88 88       88        88   88  88   88  88       88 88\n8888   8888 88888888 88888888   88888    88888   88       88 88888888 88");

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
  $('html, body').stop().animate({ scrollTop: $(target).offset().top - 60}, 1500, function() {
       //location.hash = target; //attach the hash (#jumptarget) to the pageurl
  });

  return false;
   });
});

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
  if (currentIndex > itemAmt - 1) {
    currentIndex = 0;
  }
  cycleItems();
  currentIndex += 1;
  console.dir($('.portfolioContainer div'));
}, 2500);

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

$('.mainMenu').click(function() {
  clearInterval(autoSlide);
  console.dir($('.portfolioContainer div'));
  currentIndex = 0;
  cycleItems();
  console.log(currentIndex);
});
//////////
$('.slide1').click(function() {
  clearInterval(autoSlide);
  currentIndex = 1;
  cycleItems();
});

$('.slide2').click(function() {
  clearInterval(autoSlide);
  currentIndex = 2;
  cycleItems();
});

$('.slide3').click(function() {
  clearInterval(autoSlide);
  currentIndex = 3;
  cycleItems();
});

$('.slide4').click(function() {
  clearInterval(autoSlide);
  currentIndex = 4;
  cycleItems();
});

$('.slide5').click(function() {
  clearInterval(autoSlide);
  currentIndex = 5;
  cycleItems();
});

$('.slide6').click(function() {
  clearInterval(autoSlide);
  currentIndex = 6;
  cycleItems();
});
//////////////////////////////
$('.imgTop').hover(function(){
  // $(this).transition('0.5s');
  $(this).width('auto');
  $(this).height('auto');
  }, function(){
    $(this).width('300px');
    $(this).height('300px');
});
