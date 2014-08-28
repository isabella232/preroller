<html>
<head>
<link href="//vjs.zencdn.net/4.7/video-js.css" rel="stylesheet">
<link rel="stylesheet" href="videojs-contrib-ads/src/videojs.ads.css">
<link rel="stylesheet" href="videojs-errors/videojs.errors.css">
<script src="http://vjs.zencdn.net/4.6.3/video.js"></script>
<script src="videojs-contrib-ads/src/videojs.ads.js"></script>
<script src="videojs-vast-plugin/lib/vast-client.js"></script>
<script src="videojs-youtube/src/youtube.js"></script>
<script src="videojs-vast-plugin/videojs.vast.js"></script>
<script src="videojs-errors/videojs.errors.js"></script>
</head>
<body>
<?php

/**
https://github.com/videojs/video.js
https://github.com/theonion/videojs-vast-plugin
https://github.com/videojs/videojs-contrib-ads
https://github.com/eXon/videojs-youtube
http://stackoverflow.com/questions/17292169/how-to-play-youtube-videos-using-video-js
**/
?>
<video id="vid1" src="" class="video-js vjs-default-skin" controls preload="auto" width="640" height="360">

<script>
  var vid1 = videojs('vid1', { "techOrder": ["youtube"], "src": "http://www.youtube.com/watch?v=u28dp_INmjk" }).ready(function(){
    thePlayer = this;
    thePlayer.errors();
    thePlayer.ads();
    thePlayer.vast({
      url: 'http://ad3.liverail.com/?LR_PUBLISHER_ID=1331&LR_CAMPAIGN_ID=229&LR_SCHEMA=vast2'
    });
    thePlayer.one('ended', function() {
      this.src('http://www.youtube.com/watch?v=jofNR_WkoCE');
  	  this.play();
    });
  });


</script>

</body>
</html>
