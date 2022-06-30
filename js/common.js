$(document).ready(function() {
	$('.banner .owl-carousel').owlCarousel({
		items:1,
	    loop:true,
	    autoplay:true,
	    autoplayTimeout:3000,
	    autoplayHoverPause:true
	});
	$('.partner .owl-carousel').owlCarousel({
	    loop:true,
	    margin:50,
	    autoplay:true,
	    autoplayTimeout:3000,
	    autoplayHoverPause:true,
	    responsive:{
	    	0:{
	    		items:4
	    	},
	    	768:{
	    		items:6
	    	},
	    	1000:{
	    		items:8
	    	}
	    }
	});
	$('.project_item_slide .owl-carousel').owlCarousel({
		items:4,
	    loop:true,
	    margin:24,
	    autoplay:true,
	    autoplayTimeout:3000,
	    autoplayHoverPause:true,
	    responsiveClass:true,
	    responsive:{
	    	0:{
	    		items:1,
	    		nav:true
	    	},
	    	768:{
	    		items:2,
	    		nav:false
	    	},
	    	1000:{
	    		items:4,
	    		nav:true,
	    		loop:false
	    	}
	    }
	});
	$(".mobile_menu").click(function() {
		$(".topmenu ul").addClass("show");
	});
	$(".close_btn").click(function() {
		$(".topmenu ul").removeClass("show");
	});
	$(".topmenu ul li .icon").click(function() {
		$(".topmenu ul li").removeClass("active");
		$(this).closest("li").addClass("active");
		$(".topmenu ul li > .main_submenu").removeClass("show");
		$(this).closest("li").find("> .main_submenu").addClass("show");
	});
	$(".video_play_btn").click(function() {
		var video = $(this).closest(".project_item.video").attr("video-url");
		$(".video_view").removeClass("show");
		$(".video_view."+video).addClass("show");
	});
	$(".video_play_close").click(function() {
		$(".video_view").removeClass("show");
	});
});