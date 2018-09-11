import React, { Component } from 'react';
import PokeDetail from './PokeDetail';
import './App.css';

import pokemons from '../data/pokemons'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pokemons: pokemons,
      pokemonIdSelected: 25
    }
  }
  getPokemonsList() {
    let pokemonsList = []
    for (let i = 0; i < pokemons.length; i++) {
      pokemonsList.push(
        <div className="card">{pokemons[i].name}</div>
      )
    }
    return pokemonsList
  }
  handleCardClick(national_id) {
    this.setState({
      pokemonIdSelected: national_id
    })
  }
  getBGColor(typeName) {
    switch (typeName) {
      case 'poison':
        return 'rgba(120,0,255,0.3)'
      case 'fire':
        return 'rgba(255,150,0,0.3)'
      case 'flying':
        return 'rgba(100,150,255,0.3)'
      case 'water':
        return 'rgba(0,0,255,0.3)'
      default:
        return 'rgba(220,220,220,0.3)'
    }
  }
  render() {
    let pokemonSelected = this.state.pokemons.find(p => p.national_id === this.state.pokemonIdSelected)
    return (
      <div className="App">
        <h1>PokeLikes</h1>

        <button>poison</button>
        <button>electric</button>

        <div className="columns">
          <div className="column is-5 list-pokemon">
            {this.state.pokemons.map(pokemon => (
              <div
                className="card"
                key={pokemon.national_id}
                style={{ backgroundColor: this.getBGColor(pokemon.types[0].name) }}
                onClick={e => this.handleCardClick(pokemon.national_id)}>
                <img src={`/pokepictures/${pokemon.national_id}.png`} />
                {pokemon.national_id} -{' '}
                {pokemon.name}
              </div>
            ))}
          </div>
          <div className="column is-7">
            {pokemonSelected && (<div>
              <h2>{pokemonSelected.name}</h2>
              <img src={`/pokepictures/${pokemonSelected.national_id}.png`} />
              <br />
              {pokemonSelected.types.map(type => (
                <button
                  key={type.name}
                  className="button"
                  style={{ backgroundColor: this.getBGColor(type.name) }}>
                  {type.name}
                </button>
              ))}
            </div>)}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
