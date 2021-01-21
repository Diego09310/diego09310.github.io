
function closeProjects() {
  $('.content-wrapper').removeClass('animated slideInRight');
  $('.panel-cover').removeClass('panel-cover--collapsed');
  $('.panel-cover').css('max-width', '100%');
  $('.panel-cover').animate({'width': '100%'}, 400, swing = 'swing', function () {}); // Remove function?
  $('.content-wrapper').removeClass('showing');
  window.location.hash = '';
  parent.location.hash = '';
  currentWidth = $('.panel-cover').width()
  if(currentWidth < 960) {
    $('#blog').show();
    $('.content-wrapper').hide();
  }
}

function showProjects() {
  currentWidth = $('.panel-cover').width()
    if (currentWidth < 960) {
      $('.panel-cover').addClass('panel-cover--collapsed');
      $('.content-wrapper').addClass('animated slideInRight');
      $('#blog').hide();
      $('.content-wrapper').show();
    } else {
      $('.panel-cover').css('max-width', currentWidth);
      $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function () {});
    }
    $('.content-wrapper').addClass('showing');
    $('.content-wrapper').show();
}

function smoothScrollToBlog(e) {
  // From https://css-tricks.com/snippets/jquery/smooth-scrolling/
  var target = $('#blog');
  if (target.length) {
    if (e != null) {
      e.preventDefault();
    }
    $('html, body').animate({
      scrollTop: target.offset().top
    }, 800, function() {
      var $target = $(target);
      $target.focus();
      if ($target.is(":focus")) {
        return false;
      } else {
        $target.attr('tabindex','-1');
        $target.focus();
      };
    });
  }
}

function scrollToBlog() {
  document.querySelector('#blog').scrollIntoView();
}

$(document).ready(function () {

  $('a.projects-button').click(function (e) {
    if ($('.content-wrapper').hasClass('showing')){
      closeProjects()
      return;
    }
    showProjects();
  })

  $('a.blog-button').click(function (e) {
    if ($('.content-wrapper').hasClass('showing')){
      closeProjects()
      return;
    }
  })

  if ((window.location.hash && window.location.hash == '#blog') 
      || window.location.pathname && window.location.pathname.includes("page")) {
    scrollToBlog();
  }

  $('.btn-mobile-menu').click(function () {
    $('.navigation-wrapper').toggleClass('visible animated bounceInDown')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })

  $('.navigation-wrapper .projects-button').click(function () {
    $('.navigation-wrapper').toggleClass('visible')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })

  $('.blog-button').click(function(event) {
    smoothScrollToBlog(event);
  });
  
})

