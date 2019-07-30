import React from "react";
import { Form, Button, Badge, ButtonToolbar } from "react-bootstrap";

class Page1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Form>
        <h1>
        
          <Badge variant="danger">
          Welcome to iChooseMe - what Pokemon are you??
          </Badge>
        
        </h1>
        <h2 font-color="white">Today, I want to know... </h2>
        <h4>(select all that apply)</h4>
        <Form.Check type="checkbox" label="My pokemon type (personality tendencies)" />
        <br />
        <Form.Check type="checkbox" label="My stats (overall emotional heath)" />
        <br />
        <Form.Check type="checkbox" label="How to get rare candies (how to care for my emotional health on a regular basis)" />
        <br />
        <Form.Check type="checkbox" label="How to evolve/learn new moves (long term goals for my emotional health)" />
        <br />
      
        <Button onClick={e => {this.props.formComplete(e)}} >
          done
        </Button>
    
      </Form>
    );
  }
}

export default Page1;
