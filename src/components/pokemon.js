import React from "react";

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {this.props.pokemon.name}
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
