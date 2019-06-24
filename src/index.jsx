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
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/130`)
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log("err in getting poke data client side", err);
      });
  }
  render() {
      return(
      <div>
        component rendering   
      </div>
      )
  }
}

ReactDOM.render(<App />, document.getElementById("iChooseMe"));
