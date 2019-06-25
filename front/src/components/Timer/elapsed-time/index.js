import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

import formatDuration from 'format-duration'
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import { easeLinear } from "d3-ease";
import 'react-circular-progressbar/dist/styles.css';

function elapsedTime(events, phase) {
    if (phase === 1) {
        var elapsed = 390000;
    }
    else {
        elapsed = 540000;
    }
    for (var i = 0; i < events.length; i += 2) {
        const start = events[i]
        const stop = events[i+1] || new Date()
    elapsed += start - stop
    if (elapsed < 0)
        elapsed = 0;
    }
    return elapsed
}

export default function ElapsedTime(props) {
    return (
        <div className='elapsed-time'>
            <AnimatedProgressProvider
                valueStart={0}
                valueEnd={elapsedTime(props.timingEvents, props.phase)}
                isAnimated={props.isAnimated}
                easingFunction={easeLinear}
                duration={250}
                >
                    { value => {
                        return (
                            <CircularProgressbar
                                value={value}
                                text={`${ formatDuration(elapsedTime(props.timingEvents, props.phase)) }`}
                                strokeWidth={2}
                                styles={buildStyles({
                                  strokeLinecap: "butt",
                                  pathTransition: "none"
                                })}
                            />
                        );
                    }
                }
            </AnimatedProgressProvider>
        </div>
    )
}
