(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Hide navbar when modals trigger
  $('.portfolio-modal').on('show.bs.modal', function(e) {
    $(".navbar").addClass("d-none");
  })
  $('.portfolio-modal').on('hidden.bs.modal', function(e) {
    $(".navbar").removeClass("d-none");
  })

  // The data of the news items
  var news = [
    {
      title: '喜乐元宵，阖家团圆',
      thumbnail_url: 'http://mmbiz.qpic.cn/mmbiz_jpg/07J8U0NqhOYuMFDM6ianY9fj50icu20I0iaLkXGnES9SRBR5cXfuvw0GRA5M4SZxFcy03bDc1arZWze88MibsAEEaA/0?wx_fmt=jpeg',
      permalink: 'https://mp.weixin.qq.com/s/pcpXgmfKrqWE8368M-24Fw',
      date: 'February 19, 2019'
    },
    {
      title: '【福气红包】国优给您拜年啦~',
      thumbnail_url: 'http://mmbiz.qpic.cn/mmbiz_jpg/07J8U0NqhOYQhp4SoCMcpibSZzGLJoI6MA6q5QzIFZTWQlzNAySwvh4nRMCOPfyHE99b6IgIzoDqBXYhQZ11kWw/0?wx_fmt=jpeg',
      permalink: 'https://mp.weixin.qq.com/s/V6rQxHyFXTTwUjTYCRzR_A',
      date: 'February 2, 2019'
    },
    {
      title: '2018感谢有您，期待2019再携手',
      thumbnail_url: 'http://mmbiz.qpic.cn/mmbiz_jpg/07J8U0NqhOZ4YjruFq7v4ibzFaaZSNIDO6kzbWqZ6p7DVyUCJN2GO4B2DuuI5adfD2W8peLiaKjsM0IQVsYKW41Q/0?wx_fmt=jpeg',
      permalink: 'https://mp.weixin.qq.com/s/OET4XHL5yApgqc-JPaePLA',
      date: 'December 31, 2018'
    },
    {
      title: '好喝到逆天的泰国香水椰青~',
      thumbnail_url: 'http://mmbiz.qpic.cn/mmbiz_jpg/07J8U0NqhObkrdKWBFvO6wSxT22wIicaYfiabckyicR2xGhNoSQxuOTU2mQtmbfHBWdIyvf4hibyZCicyibmn3ItESCA/0?wx_fmt=jpeg',
      permalink: 'https://mp.weixin.qq.com/s/9Yhk49JMAkevXQlObR9DVA',
      date: 'December 17, 2018'
    },
    {
      title: '甘美4k，约会当季最甜蜜的味道！',
      thumbnail_url: 'http://mmbiz.qpic.cn/mmbiz_jpg/07J8U0NqhObkrdKWBFvO6wSxT22wIicaY0Z4W6XPGWlibriceiaBfxXU0mH3mP3huXWfe92KqkRFQcdHR4FsQJ28UA/0?wx_fmt=jpeg',
      permalink: 'https://mp.weixin.qq.com/s/YI1kJ3MULv448XXkcslPHw',
      date: 'December 14, 2018'
    },
    {
      title: '炎陵黄桃首次空运出口新加坡',
      thumbnail_url: 'http://mmbiz.qpic.cn/mmbiz_jpg/07J8U0NqhObdSte9gyIic9tZbYOe9s6PQUCV8ZDuxqOic7yJ8u75kBaPz3oicelQicmrKwaiadPKOyxibA5vA9hYCBNw/0?wx_fmt=jpeg',
      permalink: 'https://mp.weixin.qq.com/s/fdKl9g8AKXMv1zX7na2LwQ',
      date: 'July 25, 2018'
    }
  ]

  var newsWrapper = $('#portfolio-items')
  $.each(news, function (index, obj) {
    newsWrapper.append(`
      <div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" href="${obj.permalink}">
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fa fa-plus fa-3x"></i>
            </div>
          </div>
          <img class="img-fluid" src="${obj.thumbnail_url}" alt="${obj.title}">
        </a>
        <div class="portfolio-caption">
          <h4>${obj.title}</h4>
          <p class="text-muted">${obj.date}</p>
        </div>
      </div><!--/.portfolio-item-->
    `)
  })

})(jQuery); // End of use strict
