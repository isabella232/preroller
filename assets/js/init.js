jQuery(window).load(function() {

});


function zsDefaultFalse(theVar){
  theVar = typeof theVar !== 'undefined' ? theVar : false;
  return theVar;
}

function makeItPreroll(id, prerollXML, prerollTime, postrollXML, postrollTime){
  id = zsDefaultFalse(id);
  prerollXML = zsDefaultFalse(prerollXML);
  prerollTime = zsDefaultFalse(prerollTime);
  postrollXML = zsDefaultFalse(postrollXML);
  postrollTime = zsDefaultFalse(postrollTime);

  if (!id){return false;}

  var preRollPluginSettings = [{
      'position' : 'pre-roll',
      'vastTagUrl' : prerollXML
    },
    {
      'position' : 'post-roll',
      'vastTagUrl' : postrollXML
    }];

  var postRollPluginSettings = [{
      'position' : 'post-roll',
      'vastTagUrl' : postrollXML
    }];

  var vid1 = videojs(id,
    {
      "techOrder": ["youtube", "html5"],
      "src": "http://www.youtube.com/watch?v=u28dp_INmjk",
      plugins:
      		{
      			vastPlugin:
      			{
      				'ads' :
      			     preRollPluginSettings
      			}
      		}
    }).ready(function(){
      var thePlayer = this;
      console.log('ready')
//      setTimeout(function() {
        //thePlayer.src({ src: 'http://www.youtube.com/watch?v=u28dp_INmjk', type: 'video/youtube' });
        //thePlayer.play();
        //document.getElementById('info-ad-time').innerHTML = '';
//      }, 15000);
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
                	   postRollPluginSettings
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
        }, postrollTime);
      });
      //document.getElementById('info-ad-time').innerHTML = '';
    }, prerollTime);
  })
}
