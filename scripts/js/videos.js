/*
 * HTML5 Video Controls
 */

(function($){
	$.fn.myControls = function() {

		return this.each(function() {
			var $myVideo = $(this);

			var attrMuted = $myVideo.attr('muted');

			// Check if .video-content has the muted attribute
			if (typeof attrMuted !== typeof undefined && attrMuted !== false) {
				// Insert custom controls after .video-content
				$myVideo.after('<div class="video-controls"><div class="play paused" title="Play/Pause"></div><div class="mute" title="Mute/Unmute"></div></div>');
			} else {
				// Insert custom controls after .video-content
				$myVideo.after('<div class="video-controls"><div class="play paused" title="Play/Pause"></div></div>');
			};

			// Create video controls jQuery objects
			var $myVideoContainer = $myVideo.parent('.video-container');
			var $myVideoControls = $('.video-controls', $myVideoContainer);
			var $myVideoPlayButton = $('.play', $myVideoControls);

			// Set the status of the play button icon
			if($myVideo[0].paused || $myVideo[0].ended) {
				$myVideoPlayButton.addClass('played');
			} else {
				$myVideoPlayButton.addClass('paused');
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
			$myVideoPlayButton.add($myVideo).click(playVideo);

			// Check if .video-content has the muted attribute
			if (typeof attrMuted !== typeof undefined && attrMuted !== false) {
				// Create video controls jQuery objects
				var $myVideoMuteButton = $('.mute', $myVideoControls);

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
				$myVideoMuteButton.click(muteVideo);
			}

			$myVideo.prop("controls", false);

			return this;
		});
	};
})(jQuery);

$(".video-content").myControls();
