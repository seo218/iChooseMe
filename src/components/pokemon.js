import React from "react";
import {Button, ListGroup} from 'react-bootstrap'

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        stats: []
    };
    // this.getPokemonImage=this.getPokemonImage.bind(this)
  }

  // getPokemonImage (obj) {
  //   let src = obj.front_default
  //   if(obj.front_default === null) src = obj.front_shiny
  //   if(src !== null) return src
  //   if(obj.front_shiny === null) src = obj.front_female 
  //   if(src !== null) return src
  //   if(obj.front_shiny_female === null) return src
  // }


  render() {
    return (
      <div>
        Congratulations, you are a {this.props.pokemon.name}!
        <br></br><br></br><br></br><br></br>

          <img src={this.props.pokemon.sprites} />
      
        <br></br><br></br><br></br><br></br>
          <ul>
            <li>Stats</li>
            <li>{`${this.props.stats[0][0]} ${this.props.stats[0][1]}`}</li>
            <li>{`${this.props.stats[1][0]} ${this.props.stats[1][1]}`}</li>
            <li>{`${this.props.stats[2][0]} ${this.props.stats[2][1]}`}</li>
            <li>{`${this.props.stats[3][0]} ${this.props.stats[3][1]}`}</li>
            <li>{`${this.props.stats[4][0]} ${this.props.stats[4][1]}`}</li>
            <li>{`${this.props.stats[5][0]} ${this.props.stats[5][1]}`}</li>
          </ul>
        <br></br><br></br><br></br><br></br>

        <Button
          onClick={e => {
            this.props.formComplete(e);
          }}
        >
          Take the test again!
        </Button>
      </div>
    );
  }
}

export default Pokemon;
