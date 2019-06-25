import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Page1 from "./components/page1.js";
import Page2 from "./components/page2.js";
import Page3 from "./components/page3.js";
import Pokemon from "./components/pokemon.js";
import Promise from 'bluebird'
// import {Pagination} from 'react-bootstrap'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
      showPage1: true,
      page1: null,
      showPage2: false,
      page2: null,
      showPage3: false,
      page3: null,
      showPokemon: false,
      yourPokemon: {id:1},
      stats: []
    };
    this.getPokeData = this.getPokeData.bind(this);
    this.handlePage1Click = this.handlePage1Click.bind(this);
    this.handlePage2Click = this.handlePage2Click.bind(this);
    this.handlePage3Click = this.handlePage3Click.bind(this);
    this.pokemonSelector = this.pokemonSelector.bind(this);
    this.handlePokemonButtonClick = this.handlePokemonButtonClick.bind(this)
    this.getStats=this.getStats.bind(this)
  }

  componentDidMount() {
    this.getPokeData();
    this.setState({
      page1: <Page1 formComplete={this.handlePage1Click} />
    });
    this.setState({
      page2: <Page2 formComplete={this.handlePage2Click} />
    });
    this.setState({
      page3: <Page3 formComplete={this.handlePage3Click} />
    });
  }

  getPokeData() {
    let pokemon = {};
    for (let i = 1; i < 152; i++) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then(({ data }) => {
          pokemon[data.id] = data;
          // console.log('logging data', data.name)
          this.setState({
            pokemon: pokemon
          });
        })
        .catch(err => {
          console.log("err in getting poke data client side", err);
        });
    }
  }

  handlePage1Click(e) {
    e.preventDefault();
    this.setState({
      showPage1: !this.state.showPage1
    });
    this.setState({
      showPage2: !this.state.showPage2
    });
  }

  handlePage2Click(e) {
    e.preventDefault();
    this.setState({
      showPage2: !this.state.showPage2
    });
    this.setState({
      showPage3: !this.state.showPage3
    });
  }

  handlePage3Click(e) {
    e.preventDefault();
    this.setState({
      showPage3: !this.state.showPage3
    });
    this.pokemonSelector();
   
  }

  pokemonSelector() {
    let random = Math.ceil(Math.random() * 151)
    
    while(random > 151) {
      random = Math.ceil(Math.random() * 151)
    }
    return new Promise((res, rej) => {
      this.setState({
        yourPokemon: this.state.pokemon[random]
      });
     res()
    })
    .then(() => {
      return this.setState({
        yourPokemon: <Pokemon 
          pokemon={this.state.yourPokemon} 
          formComplete={this.handlePokemonButtonClick}
        />
      });
    })
    .then(() => {
      return this.setState({
        showPokemon: !this.state.showPokemon
      });
    })
    .catch((err) => {
      return console.log('error in getting selecting your pokemon', err)
    })
  }

  handlePokemonButtonClick(e) {
    e.preventDefault()
    this.setState({
      showPokemon: !this.state.showPokemon
    })
    this.setState({
      showPage1: !this.state.showPage1
    })
  }

  getStats (pokeObj) {
    let stats = []
    for(let i = 0; i < pokeObj.stats.lenth; i ++) { 
      let tupel = []
      tupel.push(pokeObj.stats[i].stat)
      tupel.push(pokoObj.stats[i].base_stat)
      stats.push(tupel)
    }
    this.setState({
        stats: stats
    })
  }
  render() {
    return (
      <div className="iChooseMe">
        {this.state.showPage1 ? this.state.page1 : null}
        {this.state.showPage2 ? this.state.page2 : null}
        {this.state.showPage3 ? this.state.page3 : null}
        {this.state.showPokemon ? this.state.yourPokemon : null}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("iChooseMe"));
