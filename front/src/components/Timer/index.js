import React from 'react'
import ElapsedTime from './elapsed-time'
import Buttons from './Buttons'

import 'react-circular-progressbar/dist/styles.css';
import '../../styles/right-screen-mj.css';
import '../../styles/App.css'

const phaseTime = {
    1: 390,
    2: 540,
}

class Timer extends React.Component {
    constructor(props) {
        super(props)

        const phase = this.props.phase.phase
        this.state = {
            isPaused: true,
            phase,
            timeLeft: phaseTime[phase],
        }

        this.pauseTimerEvent = this.pauseTimerEvent.bind(this)
        this.tick = this.tick.bind(this)
        this.poll = setInterval(this.tick, 1000)
        this.refreshTimerEvent = this.refreshTimerEvent.bind(this)
    }

    tick() {
        this.setState((prevState) => {
            if (!prevState.isPaused)
                return { timeLeft: prevState.timeLeft-1 }
        })
    }

    pauseTimerEvent() {
        this.setState({
            isPaused: !this.state.isPaused,
        })
    }

    refreshTimerEvent() {
        this.setState({
            isPaused: true,
            timeLeft: phaseTime[this.state.phase],
        })
    }

  render() {
    return (
      <div className='timer-container'>
        <ElapsedTime
          timeLeft={this.state.timeLeft} phaseTime={phaseTime[this.state.phase]}
        />
        <Buttons
          handlePause={this.pauseTimerEvent}
          handleRefresh={this.refreshTimerEvent}
          isPaused={this.state.isPaused}
        />
      </div>
    )
  }
}

export default Timer;
