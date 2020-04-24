jQuery(document).ready(function ($) {


    $(window).stellar();

    var links = $('.navigation').find('li');
    slide = $('.slide');
    button = $('.button');
    mywindow = $(window);
    htmlbody = $('html,body');


    slide.waypoint(function (event, direction) {

        dataslide = $(this).attr('data-slide');

        if (direction === 'down') {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').prev().removeClass('active');
        }
        else {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').next().removeClass('active');
        }

    });
 
    mywindow.scroll(function () {
        if (mywindow.scrollTop() == 0) {
            $('.navigation li[data-slide="1"]').addClass('active');
            $('.navigation li[data-slide="2"]').removeClass('active');
        }
    });

    function goToByScroll(dataslide) {
        htmlbody.animate({
            scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
        }, 2000, 'easeInOutQuint');
    }



    links.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });

    button.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);

    });
	
	//accordion
	$(".accordion h3").eq(1).addClass("active");
	$(".accordion .accord_cont").eq(1).show();

	$(".accordion h3").click(function(){
		$(this).next(".accord_cont").slideToggle("slow")
		.siblings(".accord_cont:visible").slideUp("slow");
		$(this).toggleClass("active");
		$(this).siblings("h3").removeClass("active");
	});
	
	//prettyPhoto
			$("a[rel^='prettyPhoto']").prettyPhoto();

	//Image hover
	$(".hover_img").live('mouseover',function(){
			var info=$(this).find("img");
			info.stop().animate({opacity:0.2},300);
			$(".preloader").css({'background':'none'});
		}
	);
	$(".hover_img").live('mouseout',function(){
			var info=$(this).find("img");
			info.stop().animate({opacity:1},300);
			$(".preloader").css({'background':'none'});
		}
	);
	
	//img	
	$(".filter_all").click(function(){
		$(".item_wedding, .item_kids, .item_fashion, .item_objects, .item_nature").show("fast");
		$('#filter_img li').removeClass('selected');
		$('li.filter_all').addClass('selected');
	});
	$(".filter_wedding").click(function(){
		$(".item_kids, .item_fashion, .item_objects, .item_nature").hide("fast");
		$(".item_wedding").show("fast");
		$('#filter_img li').removeClass('selected');
		$('li.filter_wedding').addClass('selected');
	});
	$(".filter_kids").click(function(){
		$(".item_fashion, .item_objects, .item_nature, .item_wedding").hide("fast");
		$(".item_kids").show("fast");
		$('#filter_img li').removeClass('selected');
		$('li.filter_kids').addClass('selected');
	});
	$(".filter_fashion").click(function(){
		$(".item_objects, .item_nature, .item_wedding, .item_kids").hide("fast");
		$(".item_fashion").show("fast");
		$('#filter_img li').removeClass('selected');
		$('li.filter_fashion').addClass('selected');
	});
	$(".filter_objects").click(function(){
		$(".item_fashion, .item_nature, .item_wedding, .item_kids").hide("fast");
		$(".item_objects").show("fast");
		$('#filter_img li').removeClass('selected');
		$('li.filter_objects').addClass('selected');
	});
	$(".filter_nature").click(function(){
		$(".item_fashion, .item_objects, .item_wedding, .item_kids").hide("fast");
		$(".item_nature").show("fast");
		$('#filter_img li').removeClass('selected');
		$('li.filter_nature').addClass('selected');
	});
	
	
});







