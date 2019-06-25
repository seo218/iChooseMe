import React from "react";
import { Form, Button, Badge, Buttton} from "react-bootstrap";

class Page1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Form>
        <h1>
          <Badge variant='danger'>     
            Welcome to iChooseMe - what Pokemon are you??
          </Badge>
        </h1>
        <h2>
          Select all that apply    
        </h2>        
          <Form.Check type="checkbox" label="I am a mellenial" />
          <br></br>
          <Form.Check type="checkbox" label="I write computer software" />
          <br></br>
          <Form.Check type="checkbox" label="I play video games" />
          <br></br>
          <Form.Check type="checkbox" label="I live in NYC" />
          <br></br>
          <Form.Check type="checkbox" label="I wonder where the compost in front of Bevi went" />
          <br></br>
          <Form.Check type="checkbox" label="I made a great MVP project" />
          <br></br>
          <button onClick={(e)=>{this.props.formComplete(e)}}>
          done
          </button>

      </Form>
    );
  }
}

export default Page1;
