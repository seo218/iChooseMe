import React from "react";
import { Form, Button, Badge, Buttton} from "react-bootstrap";

class Page3 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Form>
        <h1>
          <Badge variant='danger'>     
          If I had to I would
          </Badge>
        </h1>
        <h2>
          Select all that apply    
        </h2>        
          <Form.Check type="checkbox" label="Sell my bike so I can buy pokeballs" />
          <br></br>
          <Form.Check type="checkbox" label="Train my Charizard to both fly and dig" />
          <br></br>
          <Form.Check type="checkbox" label="Go through Rock Tunnel without Flash" />
          <br></br>
          <Form.Check type="checkbox" label="Trade my Blue and Red version for Yellow version" />
          <br></br>
          <Form.Check type="checkbox" label="Call a hotdog a sandwhich" />
          <br></br>
          <Form.Check type="checkbox" label="Eat smore's poptarts instead of strawberry ones, just kidding - there isn't a hypothetical where this is possible" />
          <br></br>
          <button onClick={(e)=>{this.props.formComplete(e)}}>
            done
          </button>

      </Form>
    );
  }
}

export default Page3;
