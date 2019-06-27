import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { phaseTime } from '../../../constants'
import formatDuration from 'format-duration'
import 'react-circular-progressbar/dist/styles.css';

export default function ElapsedTime(props) {
    return (
            <CircularProgressbar
                value={(1 - props.timeLeft / phaseTime[props.phase]) * 100}
                text={`${ formatDuration(props.timeLeft * 1000) }`}
                strokeWidth={2.5}
                styles={buildStyles({
                    strokeLinecap: "butt",
                    pathTransition: "none",
                    textColor: '#ffffff',
                })}
            />
    );
}
