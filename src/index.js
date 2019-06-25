import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Page1 from './components/page1.js'
import Page2 from './components/page2.js'
import Page3 from './components/page3.js'
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
      page3: null
    };
    this.getPokeData = this.getPokeData.bind(this);
    this.handlePage1Click = this.handlePage1Click.bind(this)
    this.handlePage2Click = this.handlePage2Click.bind(this)
    this.handlePage3Click = this.handlePage3Click.bind(this)
  }

  componentDidMount() {
    this.getPokeData();
    this.setState({
      page1: 
      <Page1 
        togglePage1 = {this.handlePage1Click}
        // togglePage2 = {this.handlePage2Click}
      />
    })
    this.setState({
      page2:
      <Page2
        formComplete={this.handlePage2Click}
      />
    })
    this.setState({
      page3:
      <Page3
        formComplete={this.handlePage3Click}
      />
    })
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
  }

  handlePage1Click (e) {
    console.log('handle page1 click ran')
    e.preventDefault()
    this.setState({
      showPage1: !this.state.showPage1
    })
  }

  handlePage2Click () {
    this.setState({
      showPage2: !this.state.showPage2
    })
  }

  handlePage3Click () {
    this.setState({
      showPage3: !this.state.showPage3
    })
  }

  render() {
    return (
      <div className="iChooseMe">
      {this.state.showPage1 ? this.state.page1 : null}
      {this.state.showPage2 ? this.state.page2 : null}
      {this.state.showPage3 ? this.state.page3 : null}
      
      

      </div>
  );
  }
}

ReactDOM.render(<App />, document.getElementById("iChooseMe"));
