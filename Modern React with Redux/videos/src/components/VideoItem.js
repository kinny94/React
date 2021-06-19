import React from 'react';

const VideoItem = ({ video }) => {
    return (
        <div>
            <img src={ video.snippet.thumbnails.medium.url } alt={ video.snippet.title }/>
            <div className="content">
                <div className="header">{ video.snippet.title }</div>
            </div>
           
        </div>
    );
}

export default VideoItem;