import React from 'react';
import image from '../images/loader.gif'
const VideoDetail = ({video}) => {
    debugger;
    if (!video) {
        return <div className="ten wide column text-center">
        <p><img src={image}/></p>
        <span className="f-30"> No Video To Show</span>
        </div>
    }
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <div className="m-t-40">
            <div className='ui embed'>
                <iframe src={videoSrc} allowFullScreen title='Video player'/>
            </div>
            <div className='ui segment'>
                <h4 className='ui header'>{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>

    )
}

export default VideoDetail;