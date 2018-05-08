// custom select///
$(function() {
    jcf.replaceAll();
});
$(document).ready(function(){

    $('.review_js').owlCarousel({
        margin:20,
        nav:true,
        items:2,
         navText: ['<svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 83 49" style="enable-background:new 0 0 83 49;" xml:space="preserve"><g transform="translate(0,-952.36218)"><path fill="bfbfbf"d="M10.2,976.4l16-17c0.4-0.4,1-0.4,1.4,0c0.4,0.4,0.4,1,0,1.4l-14.4,15.3H73c0.6,0,1,0.4,1,1s-0.4,1-1,1H13.3l14.4,15.3c0.4,0.4,0.3,1.1,0,1.4c-0.4,0.4-1,0.4-1.4,0l-16-17C9.9,977.3,10,976.7,10.2,976.4L10.2,976.4z"/></g></svg>','<svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 83 49" style="enable-background:new 0 0 83 49;" xml:space="preserve"><g transform="translate(0,-952.36218)">	<path d="M73.8,976.4l-16-17c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l14.4,15.3H11c-0.6,0-1,0.4-1,1s0.4,1,1,1h59.7l-14.4,15.3c-0.4,0.4-0.3,1.1,0,1.4c0.4,0.4,1,0.4,1.4,0l16-17C74.1,977.3,74,976.7,73.8,976.4L73.8,976.4z"/></g></svg>'],
         responsiveClass:true,
         responsive : {
		    // breakpoint from 0 up
		    0 : {
		    	 items:1,
		    	 margin:0,
		    	 autoHeight: true
		    },
		    1000 : {
		        items:2
		    }
		}
    })
    $('.yet_js').owlCarousel({
        margin:18,
        nav:true,
        responsiveClass:true,
        dots:false,
        navText: ['<svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 83 49" style="enable-background:new 0 0 83 49;" xml:space="preserve"><g transform="translate(0,-952.36218)"><path fill="bfbfbf"d="M10.2,976.4l16-17c0.4-0.4,1-0.4,1.4,0c0.4,0.4,0.4,1,0,1.4l-14.4,15.3H73c0.6,0,1,0.4,1,1s-0.4,1-1,1H13.3l14.4,15.3c0.4,0.4,0.3,1.1,0,1.4c-0.4,0.4-1,0.4-1.4,0l-16-17C9.9,977.3,10,976.7,10.2,976.4L10.2,976.4z"/></g></svg>','<svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 83 49" style="enable-background:new 0 0 83 49;" xml:space="preserve"><g transform="translate(0,-952.36218)">	<path d="M73.8,976.4l-16-17c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l14.4,15.3H11c-0.6,0-1,0.4-1,1s0.4,1,1,1h59.7l-14.4,15.3c-0.4,0.4-0.3,1.1,0,1.4c0.4,0.4,1,0.4,1.4,0l16-17C74.1,977.3,74,976.7,73.8,976.4L73.8,976.4z"/></g></svg>'],
        responsive : {
		    // breakpoint from 0 up
		    0 : {
		    	 items:1
		    },
		    600: {
		        items:2

		    },
		    1000 : {
		        items:3
		    }
		}
    })
    
});
