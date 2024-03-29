var searchYouTube = (options, callback) => {

  // $.ajax({
  //   // This is the url you should use to communicate with the parse API server.
  //   url: 'https://www.googleapis.com/youtube/v3/search',,
  //   type: 'GET',
  //   data: JSON.stringify(message),
  //   contentType: 'application/json',
  //   success: function (data) {
  //     console.log('chatterbox: Message sent');
  //   },
  //   error: function (data) {
  //     // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
  //     console.error('chatterbox: Failed to send message', data);
  //   }
  // });

  // callback = callback || function(proxy) {};
  // callback(options);

  // return callback();

  gapi.client.setApiKey(YOUTUBE_API_KEY);

  var query = options;

  // embeddable videos

  var returnResults = [];
  gapi.client.load('youtube', 'v3', function() {
    var request = gapi.client.youtube.search.list({
      q: query,
      part: 'snippet',
      maxResults: 5,
      videoEmbeddable: true,
      type: 'video'
    });

    var returnResults = [];
    request.execute(function(response) {
      //console.log(response.items);
      var results = response.items;
      _.each(results, function(vid) {
        //console.log(vid);
      });
      callback(results);

      //returnResults = results;
      // var str = JSON.stringify(response.result);
      // console.log(str);
    });
  });


  //return returnResults;

};

window.searchYouTube = searchYouTube;
