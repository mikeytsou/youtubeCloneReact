import React, { Component } from 'react';
import axios from 'axios';
import keys from '../../config/keys';

import SearchBar from './SearchBar';
import VideoList from './VideoList';

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
        selectedVideo: videos[0]
      }));
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
