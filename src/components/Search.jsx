import YOUTUBE_API_KEY from '../config/youtube.js';
import searchYouTube from '../lib/searchYouTube.js';

// var cb = console.log.bind(window);

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    this.props.getYouTubeVideos(this.state.value);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.getYouTubeVideos(this.state.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="search-bar form-inline">
          <input className="form-control" type="text" value={this.state.value} onChange={this.handleChange}/>
          <input type="submit" value="submit" />
          {/* <button className="btn hidden-sm-down"onClick={props.getYouTubeVideos($('input.form-control'))}>
            <span className="glyphicon glyphicon-search"></span>
          </button> */}
        </div>
      </form>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
