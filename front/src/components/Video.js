import React from 'react'
import axios from 'axios'

export default class Video extends React.Component {
  constructor(props) {
    super(props)
    this.video = React.createRef()
  }
  componentDidMount () {
    this.video.current.addEventListener('ended', () => {
      axios.post('http://localhost:3005/api/videoId', { videoId: 0})
    })
  }
  render () {
    const { videoId } = this.props
    return <video controls autoplay="true" style={{width: '100%', height: '100%'}} ref={this.video}>
      <source src = {`http://localhost:3005/video/${videoId}`} type = 'video/mp4'/>
    </video>
  }
}
