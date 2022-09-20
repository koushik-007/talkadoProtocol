$(window).on("scroll", function () {
    function isScrollIntoView(elem, index) {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();
      var elemTop = $(elem).offset().top;
      var elemBottom = elemTop + $(window).height() * 0.4;
      if (elemBottom <= docViewBottom && elemTop >= docViewTop) {
        $(elem).addClass("active");
      }
      if (!(elemBottom <= docViewBottom)) {
        $(elem).removeClass("active");
      }
      var MainTimelineContainer = $("#vertical-scrollable-timeline")[0];
      var MainTimelineContainerBottom =
        MainTimelineContainer.getBoundingClientRect().bottom -
        $(window).height() * 0.6;
      $(MainTimelineContainer)
        .find(".inner")
        .css("height", MainTimelineContainerBottom + "px");
    }
    var timeline = $("#vertical-scrollable-timeline li");
    Array.from(timeline).forEach(isScrollIntoView);
  });
  
  var span = document.querySelector(".typewriter span");
var textArr = span.getAttribute("data-text").split(", "); 
var maxTextIndex = textArr.length; 

var sPerChar = 0.15; 
var sBetweenWord = 1.5;
var textIndex = 0; 

typing(textIndex, textArr[textIndex]); 

function typing(textIndex, text) {
    var charIndex = 0; 
    var maxCharIndex = text.length - 1; 
    
    var typeInterval = setInterval(function () {
        span.innerHTML += text[charIndex]; 
        if (charIndex == maxCharIndex) {
            clearInterval(typeInterval);
            setTimeout(function() { deleting(textIndex, text) }, sBetweenWord * 1000); 
            
        } else {
            charIndex += 1; 
        }
    }, sPerChar * 1000); 
}

function deleting(textIndex, text) {
    var minCharIndex = 0; 
    var charIndex = text.length - 1; 

    var typeInterval = setInterval(function () {
        span.innerHTML = text.substr(0, charIndex); 
        if (charIndex == minCharIndex) {
            clearInterval(typeInterval);
            textIndex + 1 == maxTextIndex ? textIndex = 0 : textIndex += 1; 
            setTimeout(function() { typing(textIndex, textArr[textIndex]) }, sBetweenWord * 1000); 
        } else {
            charIndex -= 1; 
        }
    }, sPerChar * 1000); 
}