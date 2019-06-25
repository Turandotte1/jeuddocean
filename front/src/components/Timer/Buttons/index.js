import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

import '../../../styles/App.css';
import lecture from '../../../images/Lecture.svg';
import pause from '../../../images/Pause.svg';

export default function Buttons(props) {
    
  const label = props.timingEvents.length % 2 === 0
    ? faPlay
    : faPause

  return (
    <div className='buttons'>
      <button
        onClick={props.handleClick}
      >
        <FontAwesomeIcon icon={label} size="2x" />
      </button>
    </div>
  )
}
