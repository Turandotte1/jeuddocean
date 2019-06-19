import React from 'react'
import formatDuration from 'format-duration'

function elapsedTime(events) {
    let elapsed = 390000
    for (var i = 0; i < events.length; i+=2) {
        const start = events[i]
        const stop = events[i+1] || new Date()
    elapsed += start - stop
  }
  return elapsed
}

export default function ElapsedTime(props) {
  return (
    <div className='elapsed-time'>
        { formatDuration(elapsedTime(props.timingEvents)) }
    </div>
  )
}
