import React from "react";

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getPokemonImage=this.getPokemonImage.bind(this)
  }

  getPokemonImage (obj) {
    let src = obj.front_default
    if(obj.front_default === null) src = obj.front_shiny
    if(src !== null) return src
    if(obj.front_shiny === null) src = obj.front_female 
    if(src !== null) return src
    if(obj.front_shiny_female === null) return src
  }
  render() {
    return (
      <div>
        You are a {this.props.pokemon.name}!
        <br></br><br></br><br></br><br></br>

          <img src={this.getPokemonImage(this.props.pokemon.sprites)} />
      
        <br></br><br></br><br></br><br></br>
        <button
          onClick={e => {
            this.props.formComplete(e);
          }}
        >
          Take the test again!
        </button>
      </div>
    );
  }
}

export default Pokemon;
