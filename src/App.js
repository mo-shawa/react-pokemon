import React from 'react';
import './App.css';
import Pokemon from './components/Pokemon/Pokemon';


class App extends React.Component{
  state = {
    player1: {
      name: 'Machoke',
      img: 'https://pokestop.io/img/pokemon/machoke-256x256.png',
      hp: 170
    },
    player2: {
      name: 'Bulbasaur',
      img: 'https://pokestop.io/img/pokemon/bulbasaur-256x256.png',
      hp: 120
    },

    status: 'Fighters are ready..?'

  }
  render(){
    return(
      <>
        <Pokemon player={this.state.player1}/>
        <Pokemon player={this.state.player2}/>
        <h3>{this.state.status}</h3>
      </>
    )
  }
}

export default App;
