import React from 'react'
import ModalVideo from 'react-modal-video'

class Video extends React.Component {
    constructor () {
        super()
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }
    componentDidMount() {
  // STEP 3: open a new browser window and store a reference to it
  this.externalWindow = window.open('', '', 'width=600,height=400,left=200,top=200');

  // STEP 4: append the container <div> (that has props.children appended to it) to the body of the new window
  this.externalWindow.document.body.appendChild(this.containerEl);
}

    openModal () {
        this.setState({isOpen: true})
    }
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
