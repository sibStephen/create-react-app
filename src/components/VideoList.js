import React from 'react';
import '../style/video.css';

const VideoList = ({videos , handleVideoSelect}) => {
	debugger;
    const renderedVideos =  videos.map((video) => {
        return <div onClick={ () => handleVideoSelect(video)} className=' video-item item m-t-40'>
            <img className='ui image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
            <div className='content'>
                <div className='header '>{video.snippet.title}</div>
            </div>
        </div>
    });
    return <div className='ui relaxed divided list'>{renderedVideos}</div>;
};

export default VideoList;