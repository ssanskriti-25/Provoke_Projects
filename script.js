let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '360',
    width: '640',
    videoId: '',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
  // You can do additional actions here when the player is ready
}

function onPlayerStateChange(event) {
  // You can handle player state changes here
}

function loadVideo() {
  const videoIdInput = document.getElementById('videoIdInput');
  const videoId = videoIdInput.value.trim();

  if (videoId !== '') {
    player.loadVideoById(videoId);
  } else {
    alert('Please enter a valid YouTube Video ID.');
  }
}
