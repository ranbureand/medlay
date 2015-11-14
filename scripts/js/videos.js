/*
 * HTML5 Video Controls
 */

/* jshint multistr: true */

//alert("banana");

(function($){
	$.fn.myControls = function() {

		return this.each(function() {
			var $myVideo = $(this);

			// Insert custom controls after .video-content
			$myVideo.after('<div class="video-controls"><div class="play" title="Play/Pause"><span></span></div><div class="mute" title="Mute/Unmute"><span></span></div></div>');

			// Create video controls jQuery objects
			var $myVideoContainer = $myVideo.parent('.video-container');
			var $myVideoControls = $('.video-controls', $myVideoContainer);
			var $myVideoPlayButton = $('.play', $myVideoControls);
			var $myVideoMuteButton = $('.mute', $myVideoControls);

			// Set the status of the play button icon
			if($myVideo[0].paused || $myVideo[0].ended) {
				$myVideoPlayButton.addClass('paused');
			} else {
				$myVideoPlayButton.addClass('played');
			};

			// Function to play/pause the video
			var playVideo = function() {
				if($myVideo[0].paused || $myVideo[0].ended) {
					$myVideo[0].play();
					$myVideoPlayButton.addClass('played').removeClass('paused');
				} else {
					$myVideo[0].pause();
					$myVideoPlayButton.addClass('paused').removeClass('played');
				};
			};

			// Play/pause the video on click
			$myVideoPlayButton.children('span').add($myVideo).click(playVideo);

			// Set the status of the mute button icon
			if($myVideo[0].muted) {
				$myVideoMuteButton.addClass('muted');
			} else {
				$myVideoMuteButton.addClass('unmuted');
			};

			// Function to mute/unmute the video
			var muteVideo = function() {
				if($myVideo[0].muted) {
					$myVideo[0].muted = false;
					$myVideoMuteButton.addClass('unmuted').removeClass('muted');
				} else {
					$myVideo[0].muted = true;
					$myVideoMuteButton.addClass('muted').removeClass('unmuted');
				}
			};

			// Mute/unmute the video on click
			$myVideoMuteButton.children('span').click(muteVideo);

			$myVideo.prop("controls", false);

			return this;
		});
	};
})(jQuery);

$(".video-content").myControls();
