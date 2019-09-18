var searchYouTube = ({key, query, max = 5}, callback) => {

  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: key,
    q: query,
    maxResults: max,
    type: 'video',
    videoEmbadabble: 'true'
  })
    .done(({items}) => {
      if (callback) {
        callback(items);
      }
    });
    // .fail(({responseJSON}) => {
    //   responseJSON.error.errors.forEach((err) => console.error(err));
    // });
};

// searchYouTube((data) => console.log(data));


export default searchYouTube;
