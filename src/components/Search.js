import React from 'react';
import '../style/video.css';

class Searchbar extends React.Component {
    state = {
        term: ''
    };
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    };
    handleSubmit = (event) => {
        event.preventDefault();
        debugger;
        this.props.handleFormSubmit(this.state.term);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className='ui form'>
                <div className='field'>
                    <label className="youtube-label" htmlFor="video-search">My Youtube</label>
                    <input onChange={this.handleChange} name='video-search' placeholder="Search any videos from youtube" type="text" value={this.state.term}/>
                </div>
            </form>
        )
    }
}
export default Searchbar;