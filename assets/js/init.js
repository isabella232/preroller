jQuery(window).load(function() {

});


function zsDefaultFalse(theVar){
  theVar = typeof theVar !== 'undefined' ? theVar : false;
  return theVar;
}

function findAndReplace(id){
  var wrapperObj = jQuery('.fluid-width-video-wrapper').first();
  // Do I need to set padding-top on the wrapper?
  var iframeObj = wrapperObj.find('iframe');
  var theSrc = iframeObj.attr('src');
  var pattern = '<video id="'+id+'" src="" class="video-js vjs-default-skin" width="100%" controls preload="auto" data-setup="{}">';

  iframeObj.replaceWith(pattern);
  var cleanSrc = theSrc.split("?")[0];
  var ytid = cleanSrc.split("/embed/")[1];
  var youtube = 'https://www.youtube.com/watch?v='+ytid;
  return youtube;

}

function makeItPreroll(id, prerollXML, prerollTime, postrollXML, postrollTime){
  var preRollPluginSettings;
  var postRollPluginSettings;
  id = zsDefaultFalse(id);
  prerollXML = zsDefaultFalse(prerollXML);
  prerollTime = zsDefaultFalse(prerollTime);
  postrollXML = zsDefaultFalse(postrollXML);
  postrollTime = zsDefaultFalse(postrollTime);

  if (!id){return false;}

  var theSrc = findAndReplace(id);
  console.log(theSrc);

  if(!postrollTime){

    preRollPluginSettings = [{
        'position' : 'pre-roll',
        'vastTagUrl' : prerollXML
    }];
    postRollPluginSettings = false;

  } else {

    preRollPluginSettings = [{
        'position' : 'pre-roll',
        'vastTagUrl' : prerollXML
      },
      {
        'position' : 'post-roll',
        'vastTagUrl' : postrollXML
    }];

    postRollPluginSettings = [{
        'position' : 'post-roll',
        'vastTagUrl' : postrollXML
    }];

  }

  var vid1 = videojs(id,
    {
      "techOrder": ["youtube", "html5"],
      "src": theSrc,
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
      console.log('ready');
//      setTimeout(function() {
        //thePlayer.src({ src: 'http://www.youtube.com/watch?v=u28dp_INmjk', type: 'video/youtube' });
        //thePlayer.play();
        //document.getElementById('info-ad-time').innerHTML = '';
//      }, 15000);
    });

  vid1.on('click', function(){
    if(!postrollTime){
      postPreRoll(id, prerollXML, prerollTime, postrollXML, postrollTime, theSrc)
    } else {
      prePostRoll(id, prerollXML, prerollTime, postrollXML, postrollTime, postRollPluginSettings, theSrc);
    }
  })
}


function prePostRoll(id, prerollXML, prerollTime, postrollXML, postrollTime, postRollPluginSettings, theSrc){

  setTimeout(function() {
    //thePlayer.src({ src: 'http://www.youtube.com/watch?v=u28dp_INmjk', type: 'video/youtube' });
    vid1 = videojs(id,
      {
        "techOrder": ["youtube", "html5"],
        "src": theSrc,
        plugins:
            {
              vastPlugin:
              {
                'ads' :
                   postRollPluginSettings
              }
            }
      });
      vid1.src({ src: theSrc, type: 'video/youtube' });
      console.log(theSrc);
      vid1.play();
      vid1.on('ended', function(){
        setTimeout(function() {
          vid1 = videojs(id,{});
          vid1 = videojs(id,
            {
              "techOrder": ["youtube", "html5"],
              "src": theSrc,
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
          vid1.src({ src: theSrc, type: 'video/youtube' });
          vid1.bigPlayButton.show();
      }, postrollTime);
    });
    //document.getElementById('info-ad-time').innerHTML = '';
  }, prerollTime);

}

function postPreRoll(id, prerollXML, prerollTime, postrollXML, postrollTime, theSrc){

  setTimeout(function() {
    //thePlayer.src({ src: 'http://www.youtube.com/watch?v=u28dp_INmjk', type: 'video/youtube' });
    vid1 = videojs(id,
      {
        "techOrder": ["youtube", "html5"],
        "src": theSrc,
        plugins:
            {
              vastPlugin:
              {
                'ads' :
                   [{}]
              }
            }
      });
      vid1.src({ src: theSrc, type: 'video/youtube' });
      console.log(theSrc);
      vid1.play();
      vid1.on('ended', function(){
        setTimeout(function() {
          vid1 = videojs(id,{});
          vid1 = videojs(id,
            {
              "techOrder": ["youtube", "html5"],
              "src": theSrc,
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
          vid1.src({ src: theSrc, type: 'video/youtube' });
          vid1.bigPlayButton.show();
      }, postrollTime);
    });
    //document.getElementById('info-ad-time').innerHTML = '';
  }, prerollTime);

}
