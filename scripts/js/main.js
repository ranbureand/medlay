// @codekit-prepend "jquery-2.1.3.js"
// @codekit-prepend "response.js"
// @codekit-prepend "jquery.sidenotes.js"
// @codekit-prepend "jquery.easing.1.3.js"
// @codekit-prepend "jquery.scrollTo.min.js"
// @codekit-prepend "jquery.localScroll.min.js"

/*
 * Local scroll
 */

$.localScroll.defaults.axis = 'y';

$.localScroll.hash({
	duration: 500,
	easing: 'easeOutSine',
	margin: false,
	offset: {top:-48},
	queue: true,
});

$.localScroll({
	duration: 500,
	easing: 'easeOutSine',
	hash: false,
	lock: false,
	margin: false,
	//offset: 0,
	offset: {top:-48},
	queue: true,
	stop: true,
	/*onBefore:function( e, anchor, $target ){
	},
	onAfter:function( anchor, settings ){
	}*/
});

/*
 * Form
 */

$('.error input, .error textarea').focus(function() {
	//alert('banana!');
	$(this).parents('div').removeClass('error');
});

/*
 * Sidenotes
 */

$(function() {
	var $postContainer, config;
	config = {
		breakpoints: {
			large: 864
		}
	};

	$postContainer = $('.body');
	$postContainer.sidenotes({
		//'removeRefMarkRegex': /^/,
		'sidenoteClass': 'sidenote typo-s',
		'footnoteSelector': 'div',
		initiallyHidden: Response.band(0, config.breakpoints.large),
		//sidenotePlacement: Response.band(config.breakpoints.large) ? 'after' : 'before'
	});

	Response.create({
		prop: 'width',
		breakpoints: [0, config.breakpoints.large]
	});

	Response.crossover(function() {
		//console.log(Response.deviceW());
		switch (false) {
			case !Response.band(0, config.breakpoints.large):
			$postContainer.sidenotes('hide');
			//return console.log('Small');
			break;
			default:
			$postContainer.sidenotes('show');
			$postContainer.sidenotes('sidenotePlacement', 'before');
			//return console.log('Medium');
		}
	}, 'width');
});