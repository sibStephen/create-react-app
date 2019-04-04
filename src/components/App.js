import React from 'react';
import Search from './Search';
import VideoList from './VideoList';
import VideoContainer from './VideoContainer';
import axios from 'axios';
import '../style/video.css';

class App extends React.Component {
state = {
    videos: [],
    selectedVideo: null
}
handleSubmit = async (keyword) => {
    const KEY = 'AIzaSyC6kGUdDVjdyz03rvxUojAk0APr4Cts0RM';

    const response =  await axios.create({
        baseURL: 'https://www.googleapis.com/youtube/v3/',
        params: {
            part: 'snippet',
            maxResults: 4,
            key: KEY
        }
        }).get('/search', {
        params: {
            q: keyword
        }
    })
    this.setState({
        videos: response.data.items
    })
};
handleVideoSelect = (video) => {
    this.setState({selectedVideo: video})
}

render() {
    return (
        <div className='ui container m-t-40'>
            <Search handleFormSubmit={this.handleSubmit}/>
            <div className='ui grid'>
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoContainer video={this.state.selectedVideo}/>
                    </div>
                    <div className="five wide column">
                        <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
}

export default App;