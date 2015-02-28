/*
 * Do your jorbascrompts here!
 */


$(function() {

  // --------------------------------------------
  // Universal Variables
  // --------------------------------------------

  var $readNextNav = $('.readNextNav');
  var $topicItem = $('.readNextNav-topicLink');
  var $body = $('body');

  // --------------------------------------------
  // Ellipsis
  // --------------------------------------------

  var $ellipsisEnabled = $body.hasClass('ellipsis-enabled');

  var forEach = Array.prototype.forEach;
  var els = document.getElementsByClassName('readNextNav-storyTxt-bd');

  if($ellipsisEnabled) {
    forEach.call(els, function(el) {
      var ellipsis = new Ellipsis(el);
      ellipsis.calc();
      ellipsis.set();
    });
  }


  // --------------------------------------------
  // Toggle Topic
  // --------------------------------------------

  $topicItem.on('click', function(){
    event.preventDefault();

    var $this = $(this);
    var topicIsActive = $this.hasClass('is-active');
    console.log(topicIsActive);

    if (!topicIsActive) {
      $topicItem.removeClass('is-active');
      $this.addClass('is-active');
      topicIsActive = false;
    }
  });


  // --------------------------------------------
  // Close Menu
  // --------------------------------------------

  var $closeBtn = $('.readNextNav-closeBtn');

  $closeBtn.on('click', function(){
    event.preventDefault();

    $body.addClass('readNextNav-is-closed');
  });


  // --------------------------------------------
  // Read Next Nav Dimmer
  // --------------------------------------------

  function dimNav(){
    var scrollTop = $(window).scrollTop();
    if (scrollTop > initialScroll && scrollTop != 0 && scrollTop < bottomThreshold ) {
      $readNextNav.addClass('is-dimmed');
    }
  };

  function brightenNav(){
      $readNextNav.removeClass('is-dimmed');
  };


  // Capture initial scroll position
  var initialScroll = $(window).scrollTop() + 25;
  var bottomThreshold = $(document).height() - $(window).height();
  var bottomThreshold = 18912;

  // Dim the nav only if initial scroll position changes
  // $(window).scroll(function(){
  //   var scrollTop = $(window).scrollTop();

  //   if (scrollTop > initialScroll && scrollTop != 0 && scrollTop < bottomThreshold ) {
  //     dimNav();
  //   } else {
  //     brightenNav();
  //   }
  // });

  // Remove dimmer if user interacts with nav
  //$readNextNav.hover(brightenNav, dimNav);


  // --------------------------------------------
  // Story Progress Bar
  // --------------------------------------------

  // Advance story progress bar as user scrolls
  $(window).scroll(function(){
    var scrollTop = $(window).scrollTop();
    var storyProgress = scrollTop / 100;
    var $el_storyProgress = $('.readNextNav-storyProgress');

    $el_storyProgress.css('width', storyProgress + '%');

    //console.log(scrollTop);
    //console.log(storyProgress + '%');
  });


  // $(document).on( 'scroll', 'window', function(){
  //     console.log('Event Fired');
  // });

  // function openTopics(event) {
  //   event.preventDefault();
  //   if (!topicsIsOpen) {
  //     $body.addClass('topics-is-open');
  //     topicsIsOpen = true;
  //   }
  // }

  // function closeTopics(event) {
  //   event.preventDefault();
  //   if (topicsIsOpen)  {
  //     $body.removeClass('topics-is-open');
  //     topicsIsOpen = false;
  //   }
  // }

  // function init() {

  //   //$topicsButton.hover(openTopics, closeTopics);
  // }

  // return {
  //   init: init
  // };

});
