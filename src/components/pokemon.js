import React from "react";
import { Button, Figure, Table } from "react-bootstrap";

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stats: []
    };
    // this.getPokemonImage=this.getPokemonImage.bind(this)
    this.pokemonTypesArrToSpacedText = this.pokemonTypesArrToSpacedText.bind(
      this
    );
  }

  // getPokemonImage (obj) {
  //   let src = obj.front_default
  //   if(obj.front_default === null) src = obj.front_shiny
  //   if(src !== null) return src
  //   if(obj.front_shiny === null) src = obj.front_female
  //   if(src !== null) return src
  //   if(obj.front_shiny_female === null) return src
  // }

  pokemonTypesArrToSpacedText() {
    let pokemonStr = "";
    for (let i = 0; i < this.props.pokemon.types.length; i++) {
      pokemonStr += `${this.props.pokemon.types[i]} `;
    }
    return pokemonStr;
  }

  render() {
    return (
      <div>
        <br />
        <br />
        <p>
          Congratulations, you are a {this.props.pokemon.name}!<br />
        </p>
        <br />
        <br />
        <br />
        <Figure className="pokemon">
          <Figure.Image
            width={171}
            height={180}
            alt="171x180"
            src={this.props.pokemon.sprites}
          />
          <br />
          <br />
          <br />
          <br />
          <Figure.Caption>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Type(s)</th>
                  <th>{this.props.stats[0][0]}</th>
                  <th>{this.props.stats[1][0]}</th>
                  <th>{this.props.stats[2][0]}</th>
                  <th>{this.props.stats[3][0]}</th>
                  <th>{this.props.stats[4][0]}</th>
                  <th>{this.props.stats[5][0]}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{this.pokemonTypesArrToSpacedText()}</td>
                  <td>{this.props.stats[0][1]}</td>
                  <td>{this.props.stats[1][1]}</td>
                  <td>{this.props.stats[2][1]}</td>
                  <td>{this.props.stats[3][1]}</td>
                  <td>{this.props.stats[4][1]}</td>
                  <td>{this.props.stats[5][1]}</td>
                </tr>
              </tbody>
            </Table>
          </Figure.Caption>
        </Figure>
        {/* <img src={this.props.pokemon.sprites} roundedCirlce /> */}
        {/* <br />
        <br />
        <br />
        <br />
        <ul>
          <li>Stats</li>
          <li>{this.pokemonTypesArrToSpacedText()}</li>
          <li>{`${this.props.stats[0][0]} ${this.props.stats[0][1]}`}</li>
          <li>{`${this.props.stats[1][0]} ${this.props.stats[1][1]}`}</li>
          <li>{`${this.props.stats[2][0]} ${this.props.stats[2][1]}`}</li>
          <li>{`${this.props.stats[3][0]} ${this.props.stats[3][1]}`}</li>
          <li>{`${this.props.stats[4][0]} ${this.props.stats[4][1]}`}</li>
          <li>{`${this.props.stats[5][0]} ${this.props.stats[5][1]}`}</li> */}
        {/* </ul> */}
        <br />
        <br />
        <br />
        <br />
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
