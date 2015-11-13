/*
 * HTML5 Video Controls
 */

/* jshint multistr: true */

//alert("banana");

(function($){
	$.fn.myControls = function() {
		var $myVideo = $(this);

		// Define controls
		$myVideo.after('\
			<div class="video-controls">\
				<div class="play" title="Play/Pause"><span></span></div>\
				<div class="mute" title="Mute/Unmute"><span></span></div>\
			</div>\
		');

		//get new elements
		var $video_container = $myVideo.parent('.video-container');
		var $video_controls = $('.video-controls', $video_container);
		var $myVideoPlayButton = $('.play', $video_controls);
		var $video_mute_button = $('.mute', $video_controls);

		//$video_controls.hide(); // keep the controls hidden

		var playVideo = function() {
			if($myVideo[0].paused || $myVideo[0].ended) {
				$myVideo[0].play();
			} else {
				$myVideo[0].pause();
			};
		};

		$myVideoPlayButton.children('span').click(playVideo);
		$myVideo.click(playVideo);

		$myVideo.bind('play', function() {
			$myVideoPlayButton.addClass('played').removeClass('paused');
		});

		$myVideo.bind('pause', function() {
			$myVideoPlayButton.addClass('paused').removeClass('played');
		});

		var muteVideo = function() {
			if($myVideo[0].muted) {
				$myVideo[0].muted = false;
				$video_mute_button.addClass('unmuted').removeClass('muted');
			} else {
				$myVideo[0].muted = true;
				$video_mute_button.addClass('muted').removeClass('unmuted');
			}
		};

		$video_mute_button.children('span').click(muteVideo);

		$myVideo.prop("controls", false);
		return this;
	};
})(jQuery);

$(".video-content").each(function() {
	$(this).myControls();
});

//$(".video-content").myControls();
