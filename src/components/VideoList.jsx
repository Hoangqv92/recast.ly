import VideoListEntry from './videoListEntry.js';

var VideoList = (props) => (
  <div className="video-list">
    {props.exampleVideoData.map((item) =>
      <VideoListEntry url={item.snippet.thumbnails.defaults} title = {item.snippet.thumbnails.defaults} description = {item.snippet.thumbnails.defaults} />)}
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  exampleVideoData: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
