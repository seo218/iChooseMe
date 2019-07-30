import React from "react";
import {
  Button,
  Figure,
  Table,
  Tab,
  Tabs,
  Nav,
  Sonnet,
  Row,
  Col,
  Carousel
} from "react-bootstrap";
import faker from 'faker'

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stats: [],
      tabContent: null,
      stats: null,
      levelUp: faker.lorem.paragraphs(),
      evolve: faker.lorem.paragraphs(),
    };
    this.pokemonTypesArrToSpacedText = this.pokemonTypesArrToSpacedText.bind(this)
    this.generateStats = this.generateStats.bind(this)
    this.editPokemonName = this.editPokemonName.bind(this)
    this.handleTabClick = this.handleTabClick.bind(this)
  }

  componentDidMount() {
    this.setState({
      stats: this.generateStats(),
      tabContent: this.generateStats()
    })
  }

  pokemonTypesArrToSpacedText() {
    let pokemonStr = "";
    for (let i = 0; i < this.props.pokemon.types.length; i++) {
      pokemonStr += `${this.props.pokemon.types[i]} `;
    }
    return pokemonStr;
  }

  generateStats () {
    return (
      <Figure>
        <Figure.Caption>
            <Table bordered hover variant="dark">
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
    )
  }

  editPokemonName(name) {
    let vowels = ['A', 'E', 'I', 'O', 'U']
    name = `a ${name.charAt(0).toUpperCase()}${name.slice(1)}`
    for(let i = 0; i < vowels.length; i ++){
      if(name[2] === vowels[i]){
        name = `an ${name.slice(1)}`
      } 
    }
    return name
  }

  handleTabClick (state) {
   this.setState({
     tabContent: state
   })
  }

  render() {
    return (
      <div>
        <br />
        <h2>
          <p>
            Congratulations, you are {this.editPokemonName(this.props.pokemon.name)}!<br />
          </p>
        </h2>
        <br />
        <br />
        <Figure className="pokemon">
          <Figure.Image
            width={171}
            height={180}
            alt="171x180"
            src={this.props.pokemon.sprites}
          />
        </Figure>
        <br />
        <br />
        <div>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row> 
              <Col sm="3" >
                <Nav variant="pills" className="flex-column">
                  <Nav.Item onClick={e => {this.handleTabClick(this.state.stats)}}>
                    <Nav.Link eventKey="first">Your Pokemon</Nav.Link>
                  </Nav.Item>
                  <Nav.Item onClick={e => {this.handleTabClick(this.state.levelUp)}}>
                    <Nav.Link eventKey="second">Level Up</Nav.Link>
                  </Nav.Item>
                  <Nav.Item onClick={e => {this.handleTabClick(this.state.evolve)}} >
                    <Nav.Link eventKey="third">Evolve</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col >
                <Tab.Content>
                <div>{this.state.tabContent}</div>
                </Tab.Content>
              </Col>
            </Row> 
          </Tab.Container>
        </div>

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
