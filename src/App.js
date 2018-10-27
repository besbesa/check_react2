import React, { Component } from 'react';
import Box from './components/box';
import img1 from './1.png';
import img2 from './1.png';
import img3 from './1.png';
import img4 from './1.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1><center>Notre équipe</center></h1>
        <Box taswira={img1} name='Yahya Bouhlel' des1="Founder" des2="CEO"/>
        <Box taswira={img2} name='Amine Bouhlel' des1="Founder" des2="COO"/>
        <Box taswira={img3} name='Arsslen idadi' des1="Software Engineer" des2="Part Time PRG.Manager"/>
        <Box taswira={img4} name='Sameh Ghanmi' des1="Full Time Program" des2="Manager"/>
      </div>
    );
  }
}

export default App;
