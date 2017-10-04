import React, { Component } from 'react';
import keys from '../../config/keys';
import axios from 'axios';
import _ from 'lodash';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('');
  }

  videoSearch(term) {
    axios.get(`https://www.googleapis.com/youtube/v3/search?key=${keys.youtubeAPIKey}&part=snippet&q=${term}&id&order=date&maxResults=20`)
      .then((videos) => this.setState({
        videos: videos.data.items,
        selectedVideo: videos.data.items[0]
      }));
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term); }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <div className="row">
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList videos={this.state.videos} onVideoSelect={(selectedVideo) => this.setState({ selectedVideo })} />
        </div>
      </div>
    );
  }
}

export default App;
