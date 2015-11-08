/*
 * HTML5 Video Controls
 */

//alert("banana");

(function($){
	$.fn.myControls = function() {
		var $myVideo = $(this);
		alert("banana");
		alert($myVideo.audioTracks.length);

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
		var $video_play_button = $('.play', $video_container);
		var $video_mute_button = $('.mute', $video_container);

		//$video_controls.hide(); // keep the controls hidden

		var playVideo = function() {
			if($myVideo[0].paused || $myVideo[0].ended) {
				$myVideo[0].play();
			} else {
				$myVideo[0].pause();
			};
		};

		$video_play_button.click(playVideo);
		$myVideo.click(playVideo);


		$myVideo.bind('play', function() {
			$video_play_button.addClass('played').removeClass('paused');
		});

		$myVideo.bind('pause', function() {
			$video_play_button.addClass('paused').removeClass('played');
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

		$video_mute_button.click(muteVideo);

		$myVideo.removeAttr('controls');
		return this;
	};
})(jQuery);

/*$(".video-content").each(function() {
	$(this).myVideo();
});*/

$('.video-content').myControls();

/*$(".video-content").each(function() {
	$(this).myfunction();
});*/
