import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Page1 from "./components/page1.js";
import Page2 from "./components/page2.js";
import Page3 from "./components/page3.js";
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
      yourPokemon: null
    };
    this.getPokeData = this.getPokeData.bind(this);
    this.handlePage1Click = this.handlePage1Click.bind(this);
    this.handlePage2Click = this.handlePage2Click.bind(this);
    this.handlePage3Click = this.handlePage3Click.bind(this);
    this.pokemonSelector = this.pokemonSelector.bind(this);
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
    for (let i = 1; i < 151; i++) {
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
    this.setState({
      showPokemon: !this.state.showPokemon
    });
    this.pokemonSelector();
  }

  pokemonSelector() {
    this.setState({
      yourPokemon: this.state.pokemon[Math.ceil(Math.random() * 151)]
    });
  }

  render() {
    return (
      <div className="iChooseMe">
        {this.state.showPage1 ? this.state.page1 : null}
        {this.state.showPage2 ? this.state.page2 : null}
        {this.state.showPage3 ? this.state.page3 : null}
        {this.state.showPokemon ? this.state.yourPokemon.id : null}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("iChooseMe"));
