<html>
<head>
<link href="//vjs.zencdn.net/4.7/video-js.css" rel="stylesheet">
<link rel="stylesheet" href="videojs_vast_ad_serving_plugin/css/vast.plugin.css">
<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script src="http://vjs.zencdn.net/4.7.3/video.js"></script>
<script src="videojs-youtube/src/youtube.js"></script>


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
<script src="videojs_vast_ad_serving_plugin/js/vast.plugin.js"></script>
<script>
  var vid1 = videojs('vid1',
    {
      "techOrder": ["youtube", "html5"],
      "src": "http://www.youtube.com/watch?v=u28dp_INmjk",
      plugins:
      		{
      			vastPlugin:
      			{
      				'ads' :
      				[{
      					'position' : 'pre-roll',
      					'vastTagUrl' : 'http://ad3.liverail.com/?LR_PUBLISHER_ID=1331&LR_CAMPAIGN_ID=229&LR_SCHEMA=vast2'
      				},
      				{
      					'position' : 'post-roll',
      					'vastTagUrl' : 'http://ad3.liverail.com/?LR_PUBLISHER_ID=1331&LR_CAMPAIGN_ID=229&LR_SCHEMA=vast2'
      				}]
      			}
      		}
    }).ready(function(){
      var thePlayer = this;
      console.log('ready')
      setTimeout(function() {
        //thePlayer.src({ src: 'http://www.youtube.com/watch?v=u28dp_INmjk', type: 'video/youtube' });
        //thePlayer.play();
        //document.getElementById('info-ad-time').innerHTML = '';
      }, 15000);
    });

  vid1.on('click', function(){
    setTimeout(function() {
      //thePlayer.src({ src: 'http://www.youtube.com/watch?v=u28dp_INmjk', type: 'video/youtube' });
      vid1 = videojs('vid1',
        {
          "techOrder": ["youtube", "html5"],
          "src": "http://www.youtube.com/watch?v=u28dp_INmjk",
          plugins:
              {
                vastPlugin:
                {
                  'ads' :
                  [
                  {
                    'position' : 'post-roll',
                    'vastTagUrl' : 'http://ad3.liverail.com/?LR_PUBLISHER_ID=1331&LR_CAMPAIGN_ID=229&LR_SCHEMA=vast2'
                  }]
                }
              }
        });
        vid1.src({ src: 'http://www.youtube.com/watch?v=u28dp_INmjk', type: 'video/youtube' });
        vid1.play();
        vid1.on('ended', function(){
          setTimeout(function() {
            vid1 = videojs('vid1',{});
            vid1 = videojs('vid1',
              {
                "techOrder": ["youtube", "html5"],
                "src": "http://www.youtube.com/watch?v=u28dp_INmjk",
                plugins: {
                  vastPlugin:
                    {
                      'ads' :
                      [
                      {
                      }
                      ]
                    }
                }
              });
            vid1.src({ src: 'http://www.youtube.com/watch?v=u28dp_INmjk', type: 'video/youtube' });
            vid1.bigPlayButton.show();
        }, 10200);
      });
      //document.getElementById('info-ad-time').innerHTML = '';
    }, 11000);
  })


</script>

</body>
</html>
