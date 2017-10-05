import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'aframe';
import 'aframe-particle-system-component';
import {Entity, Scene} from 'aframe-react';

class App extends Component {
  render() {
    return (
        <Scene>
          <Entity primitive='a-sky' src="https://ucarecdn.com/19a73c27-dc44-4e15-9d49-e93fd70d8014/"/>

          <Entity primitive='a-box' color='blue' position='12 0 -5' />

          <Entity primitive='a-sphere' color="green" position="1 0 -10"/>

          <Entity primitive='a-cylinder' color="purple" position="12 1.5 -5" rotation="90 90 180"/>

          <Entity particle-system={{preset: 'snow', color: 'blue', particleCount: 8000,  }} />

          <Entity particle-system={{preset: 'snow', color: '#0000FF,#00FF00,#FF0000', particleCount: 8000, size: 4 }} />

        </Scene>
    );
  }
}

export default App;
