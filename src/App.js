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

    status: 'Fighters are ready..?',

    
    
  }
  player1Attack = () => {
    let player2hp = this.state.player2.hp
    this.setState({
      player2: {...this.state.player2,
        hp: player2hp -= 10,
      },
      status: `${this.state.player1.name} is attacking ${this.state.player2.name}`
    })
  }
  player2Attack = () => {
    let player1hp = this.state.player1.hp
    this.setState({
      player1: {...this.state.player1,
        hp: player1hp -= 10,
      },
      status: `${this.state.player2.name} is attacking ${this.state.player1.name}`
    })
  }
  render(){
    return(
      <>
        <Pokemon player={this.state.player1} attack={this.player1Attack}/>
        <Pokemon player={this.state.player2} attack={this.player2Attack}/>
        <h3>{this.state.status}</h3>
      </>
    )
  }
}

export default App;
