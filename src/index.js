import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Page1 from "./components/page1.js";
import Page2 from "./components/page2.js";
import Page3 from "./components/page3.js";
import Page4 from "./components/page4.js";
import Page5 from "./components/page5.js";
import Pokemon from "./components/pokemon.js";
import Promise from 'bluebird';
import extraPokeInfo from "../database/pokemon.js"
import 'bootstrap/dist/css/bootstrap.min.css'
import eevee from '../database/Eevee.png'

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
      showPage4: false,
      page4: null,
      showPage5: false,
      page5: null, 
      showPokemon: false,
      yourPokemon: {id:1},
      stats: [],
      evolveImage: eevee,
    };
    this.getPokeData = this.getPokeData.bind(this);
    this.handlePage1Click = this.handlePage1Click.bind(this);
    this.handlePage2Click = this.handlePage2Click.bind(this);
    this.handlePage3Click = this.handlePage3Click.bind(this);
    this.handlePage4Click = this.handlePage4Click.bind(this);
    this.handlePage5Click = this.handlePage5Click.bind(this);
    this.pokemonSelector = this.pokemonSelector.bind(this);
    this.handlePokemonButtonClick = this.handlePokemonButtonClick.bind(this)
    this.getStats=this.getStats.bind(this)
    this.addTypesAndPicture=this.addTypesAndPicture.bind(this)
    // this.getEvolveImage=this.getEvolveImage.bind(this)
    this.setPages=this.setPages.bind(this)
  }

  componentDidMount() {
    this.getPokeData();
    
  }

  setPages(){
    this.setState({
      page1: <Page1 evolveImage={this.state.evolveImage} 
                    formComplete={this.handlePage1Click} 
                    pokemon={this.state.pokemon}
                    // getEvolveImage={this.getEvolveImage}
                    />
    });
    this.setState({
      page2: <Page2 formComplete={this.handlePage2Click} />
    });
    this.setState({
      page3: <Page3 formComplete={this.handlePage3Click} />
    });
    this.setState({
      page4: <Page4 formComplete={this.handlePage4Click} />
    });
    this.setState({
      page5: <Page5 formComplete={this.handlePage5Click} />
    });
  }
  
  getPokeData() {
    let pokemon = {};
    for (let i = 1; i < 152; i++) {
      axios
      .get(`https://pokeapi.co/api/v2/pokemon/${i}`)
      .then(({ data }) => {
        pokemon[data.id - 1] = data;
        this.setState({
          pokemon: pokemon
        });
      })
      .then(() => {
        this.addTypesAndPicture()
      })
      .then(()=> {
        this.setPages()
      })
      .then(() => {
        this.getEvolveImage(1)
      })
      .catch(err => {
        console.log("err in getting poke data client side", err);
      });
    }
  }
  
  addTypesAndPicture() {
    let obj = this.state.pokemon
    for(let key in obj) {
      obj[key].sprites = extraPokeInfo[key].imageUrl
      obj[key].types = extraPokeInfo[key].types
    }
  }
  
  getEvolveImage(num){
    this.setState({
      evolveImage: this.state.pokemon[num].sprites
    })
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
      showPage4: !this.state.showPage4
    });
  }

  handlePage4Click(e) {
    e.preventDefault();
    this.setState({
      showPage4: !this.state.showPage4
    });
    this.setState({
      showPage5: !this.state.showPage5
    });
  }
  handlePage5Click(e) {
    e.preventDefault();
    this.setState({
      showPage5: !this.state.showPage5
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
      this.getStats(this.state.yourPokemon)
    })
    .then(() => {
      return this.setState({
        yourPokemon: <Pokemon 
          pokemon={this.state.yourPokemon} 
          formComplete={this.handlePokemonButtonClick}
          stats={this.state.stats}
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
    for(let i = 0; i < pokeObj.stats.length; i ++) { 
      let tupel = []
      tupel.push(pokeObj.stats[i].stat.name)
      tupel.push(pokeObj.stats[i].base_stat)
      stats.push(tupel)
    }
    this.setState({
        stats: stats
    })
  }
  render() {
    return (
      <div className="iChooseMe" >
        {this.state.showPage1 ? this.state.page1 : null}
        {this.state.showPage2 ? this.state.page2 : null}
        {this.state.showPage3 ? this.state.page3 : null}
        {this.state.showPage4 ? this.state.page4 : null}
        {this.state.showPage5 ? this.state.page5 : null}
        {this.state.showPokemon ? this.state.yourPokemon : null}        
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
