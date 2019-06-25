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
           Deep seeded issues and mental health
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
          <button 
        //   variant='info' 
          onClick={(e)=>{this.props.formComplete()}}
          >
          done
          </button>

      </Form>
    );
  }
}

export default Page3;
