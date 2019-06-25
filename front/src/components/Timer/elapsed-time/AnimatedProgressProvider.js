import React from "react";
import { Animate } from "react-move";

class AnimatedProgressProvider extends React.Component {

    render() {
        return (
          <Animate
            start={() => ({
              value: this.props.valueStart
            })}
            update={() => ({
              value: [
                this.props.isAnimated ? this.props.valueEnd : this.props.valueStart
              ],
              timing: {
                duration: this.props.duration * 1000,
                ease: this.props.easingFunction
              }
            })}
          >
            {({ value }) => this.props.children(value)}
          </Animate>
        );
        }
    }

export default AnimatedProgressProvider;
