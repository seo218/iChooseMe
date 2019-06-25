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
            Welcome to iChooseMe - the invasive pokemon personality test
          </Badge>
        </h1>
        <h2>
          Select all that apply    
        </h2>        
          <Form.Check type="checkbox" label="test" />
          <br></br><br></br>
          <Form.Check type="checkbox" label="test" />
          <br></br><br></br>
          <Form.Check type="checkbox" label="test" />
          <br></br><br></br>
          <Form.Check type="checkbox" label="test" />
          <br></br><br></br>
          <Form.Check type="checkbox" label="test" />
          <br></br><br></br>
          <Form.Check type="checkbox" label="test" />
          <br></br><br></br>
          <button onClick={(e)=>{this.props.formComplete(e)}}>
          done
          </button>

      </Form>
    );
  }
}

export default Page1;
