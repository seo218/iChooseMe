import React from "react";
import { Form, Button, Badge } from "react-bootstrap";

class Page1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Form>
        <h1>
        Welcome to iChooseMe - 
          <Badge variant="danger">
            what Pokemon are you??
          </Badge>
        
        </h1>
        <h2>Select all that apply</h2>
        <Form.Check type="checkbox" label="I am a mellenial" />
        <br />
        <Form.Check type="checkbox" label="I write computer software" />
        <br />
        <Form.Check type="checkbox" label="I play video games" />
        <br />
        <Form.Check type="checkbox" label="I live in NYC" />
        <br />
        <Form.Check
          type="checkbox"
          label="I wonder where the compost in front of Bevi went"
        />
        <br />
        <Form.Check type="checkbox" label="I made a great MVP project" />
        <br />
        <Button
          variant="danger"
          onClick={e => {
            this.props.formComplete(e);
          }}
        >
          done
        </Button>
      </Form>
    );
  }
}

export default Page1;
