import React from 'react';

const VideoListItem = (props) => {
  const videoTitle = props.video.snippet.title;
  const imageUrl = props.video.snippet.thumbnails.default.url;

  return (
    <li className="list-group-item" onClick={() => props.onVideoSelect(props.video)} >
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} alt="" />
        </div>

        <div className="media-body">
          <div className="media-heading">{videoTitle}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
