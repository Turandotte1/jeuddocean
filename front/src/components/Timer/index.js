import React from 'react'
import ElapsedTime from './elapsed-time'
import Buttons from './Buttons'
import axios from 'axios'

import 'react-circular-progressbar/dist/styles.css';
import '../../styles/right-screen-mj.css';
import '../../styles/App.css'
import { phaseTime, } from '../../constants'

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
        this.refreshTimerEvent = this.refreshTimerEvent.bind(this)
    }

    tick() {
        this.setState((prevState) => {
            if (!prevState.isPaused) {
                return { timeLeft: prevState.timeLeft - 1 }
            }
        })
      this.sendTime()
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
  sendTime() {
    const { timeLeft, isPaused, phase } = this.state
    axios.post('http://localhost:3005/api/time', { timeLeft, isPaused, phase})
  }
  componentDidMount () {
    const interval = setInterval(this.tick, 1000)
    this.setState({ interval })
  }
  componentWillUnmount() {
    clearInterval(this.state.interval)
  }

  render() {
    return (
      <div className='timer-container'>
        <ElapsedTime
          timeLeft={this.state.timeLeft} phase={this.state.phase}
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
