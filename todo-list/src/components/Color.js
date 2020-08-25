import React, { Component } from 'react';

class Color extends Component {
    render() {
        const { id, color, changeColor } = this.props;
        return (
          <div id={id} className="color" onClick={() => changeColor(color)}>
              <button style={{ border: 0, background: color }}>{color}</button>
          </div>
        );
    }
}

export default Color;