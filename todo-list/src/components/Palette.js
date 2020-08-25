import React, { Component } from 'react';
import Color from './Color';

class Palette extends Component {
    state = {
        colors: [
            { id: 1, color: '#343a40'},
            { id: 2, color: '#f03e3e'},
            { id: 3, color: '#12b886'},
            { id: 4, color: '#228ae6'},
        ]
      }
    render() {
        const {colors} = this.state
        const {changeColor} = this.props
        const colorItems = colors.map(
            ({id, color}) => (
              <Color
                id={id}
                color={color}
                changeColor={changeColor}
              />
            )
          );
  
          return (
            <div>
              {colorItems}
            </div>
          );
    }
}
export default Palette;