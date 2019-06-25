import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: []
    };
    this.getPokeData = this.getPokeData.bind(this);
  }

  componentDidMount() {
    this.getPokeData();
  }

  getPokeData() {
    let pokemon = {};

    for (let i = 1; i < 151; i++) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then(({ data }) => {
          pokemon[data.name] = data;
          // console.log('logging data', data.name)
          this.setState({
            pokemon: pokemon
          })
        })
        .catch(err => {
          console.log("err in getting poke data client side", err);
        });
    }
  //   return pokemon
  //  .then((pokemon) => {
  //    console.log('logging pokemon after api call', pokemon)
  //    this.setState({
  //      pokemon: pokemon
  //    })
  //  })
  }

  render() {
    return <div className="iChooseMe">react component rendering</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("iChooseMe"));
