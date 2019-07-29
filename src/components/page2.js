import React from "react";
import { Form, Button, Badge} from "react-bootstrap";

class Page2 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Form>
        <h1>
          <Badge variant='danger'>     
          I'm more of a(n)...
          </Badge>
        </h1>
        <h2>
          Select all that apply    
        </h2>        
          <Form.Check type="checkbox" label="Ash" />
          <br></br>
          <Form.Check type="checkbox" label="Misty" />
          <br></br>
          <Form.Check type="checkbox" label="Brock" />
          <br></br>
          <Form.Check type="checkbox" label="Nurse Joy" />
          <br></br>
          <Form.Check type="checkbox" label="Officer Jenny" />
          <br></br>
          <Form.Check type="checkbox" label="Gary" />
          <br></br>
          <Form.Check type="checkbox" label="Professor Oak" />
          <br></br>
          <Form.Check type="checkbox" label="Jesse" />
          <br></br>
          <Form.Check type="checkbox" label="James" />
          <br></br>
          <Button onClick={(e)=>{this.props.formComplete(e)}}>
            done
          </Button>

      </Form>
    );
  }
}

export default Page2;
