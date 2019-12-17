$(function(){

	$('.fancy').fancybox();

	$('.hide').slideUp();

	$('header ul').addClass('active');

	$('.paralax').plaxmove({ratioH:0.02,ratioV:0.0});

	$('.read_all').click(function(){
		if($(this).hasClass('active')){
			$('.hide').slideUp();
			$(this).removeClass('active').find('span').text('Посмотреть все методы лечения');
		}
		else{
			$('.hide').slideDown();
			$(this).addClass('active').find('span').text('Скрыть методы лечения');
		}
	});

	$('.open_popup').click(function(){
		$('.popup, .bg_popup').fadeIn();

		$('.bg_popup').click(function(){
			$('.popup, .bg_popup').fadeOut();
		});
	});

	$('footer span').click(function(){
		$('.popup_conf').css({'top': $(window).scrollTop() + 100}).fadeIn();
		$('.bg_popup').fadeIn();

		$('.bg_popup').click(function(){
			$('.popup_conf, .bg_popup').fadeOut();
		});
	});

	$('.slick1').slick({
        slidesToShow: 1,
        slidesToScroll: 1
   });

	$('.slick2').slick({
        slidesToShow: 1,
        slidesToScroll: 1
   });

	$('.slick3').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
	    {
	      breakpoint: 1050,
	      settings: {
	        slidesToShow: 4,
	      }
	    },
	    {
	      breakpoint: 830,
	      settings: {
	        slidesToShow: 3,
	      }
	    },
	    {
	      breakpoint: 630,
	      settings: {
	        slidesToShow: 2,
	      }
	    },
	    {
	      breakpoint: 450,
	      settings: {
	        slidesToShow: 1,
	      }
	    }
	  ]
   });

	$('.slick4').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
         responsive: [
	    {
	      breakpoint: 1150,
	      settings: {
	        slidesToShow: 2,
	      }
	    },
	    {
	      breakpoint: 810,
	      settings: {
	        slidesToShow: 1,
	      }
	    }
	  ]
   });

	$('.slick5').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
	    {
	      breakpoint: 1050,
	      settings: {
	        slidesToShow: 4,
	      }
	    },
	    {
	      breakpoint: 830,
	      settings: {
	        slidesToShow: 3,
	      }
	    },
	    {
	      breakpoint: 630,
	      settings: {
	        slidesToShow: 2,
	      }
	    },
	    {
	      breakpoint: 450,
	      settings: {
	        slidesToShow: 1,
	      }
	    }
	  ]
   });

});


















