import React from 'react'
import ElapsedTime from './elapsed-time'
import Buttons from './Buttons'

import '../../styles/App.css'

class Timer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            timingEvents: [],
            isAnimated: false,
            phase: this.props.phase.phase,
            nonce: 0,
        }

        this.addTimerEvent = this.addTimerEvent.bind(this)
        this.tick = this.tick.bind(this)
        this.poll = setInterval(this.tick, 1000)
    }

    tick() {
        this.setState((prevState) => ({ nonce: prevState.nonce+1 }))
    }

    addTimerEvent() {
        this.setState({
            timingEvents: [
                ...this.state.timingEvents,
                new Date()
            ],
            isAnimated: !this.state.isAnimated
        })
    }

  render() {
    return (
      <div className='timer-container'>
        <ElapsedTime
          timingEvents={this.state.timingEvents} phase={this.state.phase} isAnimated={this.state.isAnimated}
        />
        <Buttons
          handleClick={this.addTimerEvent}
          timingEvents={this.state.timingEvents}
        />
      </div>
    )
  }
}

export default Timer;
