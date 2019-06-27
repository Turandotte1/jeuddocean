import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedoAlt, faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

import '../../../styles/App.css';

export default function Buttons(props) {

  const label = props.isPaused ? faPlay :  faPause

  return (
    <div className='buttons-right-screen'>
      <button onClick={props.handlePause}>
          <FontAwesomeIcon icon={label} size="3x" />
      </button>
      <button onClick={props.handleRefresh}>
          <FontAwesomeIcon icon={ faRedoAlt } size="3x" />
      </button>
    </div>
  )
}
