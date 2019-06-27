import React from 'react'
import ModalVideo from 'react-modal-video'

class Video extends React.Component {
    render () {
        return (
            <div class="video">
                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='L61p2uyiMSo' onClose={() => this.setState({isOpen: false})} />
                <button className="blue-button" onClick={this.openModal}>Lancer la vidéo</button>
            </div>
        )
    }
}

export default Video;
