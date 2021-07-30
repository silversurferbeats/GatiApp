import React, { Component } from 'react';
import GetGati from '../service/index';
//import { useState, useEffect } from 'react';


class Gatipic extends Component {
  render() {

    

    return (
      <div>
        <img
          id={1}
          className="imagen"
          src="https://cataas.com/cat/5ec587d0fc6b05001805d6bb"
        />
        <button
          className="boton"
        >
        Next
        </button>
      </div>
    );  
  }
}
 export default Gatipic;