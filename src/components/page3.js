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
           Ex's and Mommy/Daddy Issues
          </Badge>
        </h1>
        <h2>
          Select all that apply    
        </h2>        
          <Form.Check type="checkbox" label="test" />
          <Form.Check type="checkbox" label="test" />
          <Form.Check type="checkbox" label="test" />
          <Form.Check type="checkbox" label="test" />
          <Form.Check type="checkbox" label="test" />
          <Form.Check type="checkbox" label="test" />
          <button onClick={(e)=>{this.props.formComplete(e)}}>
            done
          </button>

      </Form>
    );
  }
}

export default Page3;
