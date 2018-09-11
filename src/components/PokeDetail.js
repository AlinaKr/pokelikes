import React, { Component } from 'react';
import pokePicture from '../pokepictures/25.png';

class PokeDetail extends Component {
  render() {
    return (
      <div className="PokeDetail">
        <img src={pokePicture} alt=""/>
      </div>
    );
  }
}

export default PokeDetail;
