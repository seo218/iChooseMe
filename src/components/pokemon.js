import React from "react";

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        stats: []
    };
    this.getPokemonImage=this.getPokemonImage.bind(this)
    this.stats=this.stats.bind(this)
  }

  getPokemonImage (obj) {
    let src = obj.front_default
    if(obj.front_default === null) src = obj.front_shiny
    if(src !== null) return src
    if(obj.front_shiny === null) src = obj.front_female 
    if(src !== null) return src
    if(obj.front_shiny_female === null) return src
  }

  stats (pokeObj) {
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
      <div>
        Congratulations, you are a {this.props.pokemon.name}!
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
