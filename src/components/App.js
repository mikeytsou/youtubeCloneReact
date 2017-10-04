import React, { Component } from 'react';
import axios from 'axios';
import keys from '../../config/keys';

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

    axios.get(`https://www.googleapis.com/youtube/v3/search?key=${keys.youtubeAPIKey}&part=snippet&q=warriors&id&order=date&maxResults=20`)
      .then((videos) => this.setState({
        videos: videos.data.items,
        selectedVideo: videos.data.items[0]
      }));
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList videos={this.state.videos} onVideoSelect={(selectedVideo) => this.setState({ selectedVideo })} />
      </div>
    );
  }
}

export default App;
