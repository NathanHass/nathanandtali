/*
 * Do your jorbascrompts here!
 */


$(function() {

  // --------------------------------------------
  // Universal Variables
  // --------------------------------------------

  var $readNextNav = $('.readNextNav');
  var $topicItem = $('.readNextNav-topicLink');


  // --------------------------------------------
  // Ellipsis
  // --------------------------------------------

  var forEach = Array.prototype.forEach;
  var els = document.getElementsByClassName('readNextNav-storyTxt-bd');

  forEach.call(els, function(el) {
    var ellipsis = new Ellipsis(el);
    ellipsis.calc();
    ellipsis.set();
  });


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
  $(window).scroll(function(){
    var scrollTop = $(window).scrollTop();

    if (scrollTop > initialScroll && scrollTop != 0 && scrollTop < bottomThreshold ) {
      dimNav();
    } else {
      brightenNav();
    }
  });

  // Remove dimmer if user interacts with nav
  $readNextNav.hover(brightenNav, dimNav);


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
