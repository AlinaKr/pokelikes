import React, { Component } from 'react';
import PokeDetail from './PokeDetail';
import './App.css';

import pokemons from '../data/pokemons'

console.log("pokemons", pokemons)

class App extends Component {
  getPokemonsList() {
    let pokemonsList = []
    for (let i = 0; i < pokemons.length; i++) {
      pokemonsList.push(
        <div className="card">{pokemons[i].name}</div>
      )
    }
    return pokemonsList
  }
  render() {
    let pokemonsList = []
    for (let i = 0; i < pokemons.length; i++) {
      pokemonsList.push(
        <div className="card">{pokemons[i].name}</div>
      )
    }
    return (
      <div className="App">
        <h1>PokeLikes</h1>
        <div className="columns">
          <div class="column is-5 list-pokemon">
            {pokemons.map(pokemon => (
              <div
                className="card"
                key={pokemon.national_id}
                onClick={e => console.log(pokemon.name)}>
                <img src={`/pokepictures/${pokemon.national_id}.png`} />
                {pokemon.national_id} -{' '}
                {pokemon.name}
              </div>
            ))}
          </div>
          <div class="column is-7">
            2nd column
          </div>
        </div>
      </div>
    );
  }
}

export default App;
