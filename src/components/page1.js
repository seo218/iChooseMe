import React from "react";
import { CardDeck, Button, Badge, Card } from "react-bootstrap";
import stats from "../../database/stats.png";
import candies from "../../database/rareCandy.jpg";
import types from "../../database/badges types.jpg";

class Page1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      evolveImage: this.props.evolveImage
    }
    // this.getEvolveImage=this.getEvolveImage.bind(this)
  }

  componentDidMount(){
    // this.getEvolveImage(1)
  }

  // getEvolveImage(num){
  //   this.setState({
  //     evolveImage: this.props.pokemon[num].sprites
  //   })
  // }

  render() {
    return (
      <div>

        <h1>
          <Badge variant="danger">
            Welcome to iChooseMe - what Pokemon are you??
          </Badge>
        </h1>
        <h2 font-color="white">
          I want to be the very best! That no one ever was...{" "}
        </h2>
        <h2> and I would like to know... </h2>
        <h4>(select all that apply)</h4>
        <div className="firstPageCards">
      <CardDeck>

        <Card border="danger" bg="dark" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={types} />
          <Card.Body>
            <Card.Title>my type</Card.Title>
            <Card.Text>
              My personality type and mental health tendencies
            </Card.Text>
            <Button variant="primary">Yes</Button>
          </Card.Body>
        </Card>
        <br />
        <Card border="success" bg="dark" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={stats} />
          <Card.Body>
            <Card.Title>how to level up my stats</Card.Title>
            <Card.Text>know overall general current mental wellness</Card.Text>
            <Button variant="primary">Yes</Button>
          </Card.Body>
        </Card>
        <br />
        <Card border="warning" bg="dark" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={candies} />
          <Card.Body>
            <Card.Title>where to get rare candies</Card.Title>
            <Card.Text>
              How to care for my emotional health on a regular basis
            </Card.Text>
            <Button variant="primary">Yes</Button>
          </Card.Body>
        </Card>
        <br />
        <Card border="primary" bg="dark" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={this.state.evolveImage} />
          <Card.Body>
            <Card.Title> how to evolve</Card.Title>
            <Card.Text>
              identify and create long term emotional well being goals
            </Card.Text>
            <Button variant="primary">Yes</Button>
          </Card.Body>
        </Card>
      </CardDeck>
        <br />
        <br />
        <Button
          onClick={e => {
            this.props.formComplete(e);
          }}
        >
          done
        </Button>
        </div>
      </div>
    
    );
  }
}

export default Page1;
